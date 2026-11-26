import type { Dispatch } from 'redux';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';
import type { Setter } from '../../setter';

const AVATAR_SIZE = 128;
const STORAGE_FILE_BASE_URL = '/horsecoder-storage/api/sys/storage/file';
const STORAGE_USER = 'agent';
const AVATAR_COLORS = [
  '#3867d6',
  '#20bf6b',
  '#eb3b5a',
  '#fa8231',
  '#8854d0',
  '#0fb9b1',
  '#4b6584',
  '#2d98da',
];

type StorageUploadResponse = {
  result: boolean;
  status: number;
  message?: string;
  data?: {
    user?: string;
    fileName?: string;
  };
};

function getAvatarText(name?: string) {
  const text = Array.from((name || '').trim())
    .filter((item) => item.trim())
    .slice(0, 4)
    .join('');
  return text || '对话';
}

function getAvatarTextLines(text: string) {
  const textList = Array.from(text).slice(0, 4);
  return [textList.slice(0, 2).join(''), textList.slice(2, 4).join('')].filter(Boolean);
}

function getColorByText(text: string) {
  let hash = 0;
  Array.from(text).forEach((char) => {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  });
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('头像生成失败'));
      }
    }, 'image/png');
  });
}

function safeEncodeFileName(fileName: string) {
  try {
    return encodeURIComponent(decodeURIComponent(fileName));
  } catch (error) {
    return encodeURIComponent(fileName);
  }
}

function buildDownloadUrl(fileName: string) {
  return `${STORAGE_FILE_BASE_URL}/download?fileName=${safeEncodeFileName(
    fileName,
  )}&user=${STORAGE_USER}`;
}

async function parseUploadResponse(response: Response): Promise<StorageUploadResponse> {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error('头像上传接口返回格式不是 JSON');
  }
}

async function createDialogueAvatar(name?: string) {
  const avatarText = getAvatarText(name);
  const canvas = document.createElement('canvas');
  canvas.width = AVATAR_SIZE;
  canvas.height = AVATAR_SIZE;

  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('浏览器不支持 Canvas');
  }

  context.fillStyle = getColorByText(avatarText);
  context.fillRect(0, 0, AVATAR_SIZE, AVATAR_SIZE);
  context.fillStyle = '#ffffff';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  const textLines = getAvatarTextLines(avatarText);
  const fontSize = textLines.length > 1 ? 38 : 42;
  const lineHeight = textLines.length > 1 ? 44 : 0;
  const startY = AVATAR_SIZE / 2 - ((textLines.length - 1) * lineHeight) / 2;
  context.font = `600 ${fontSize}px Arial, "Microsoft YaHei", sans-serif`;
  textLines.forEach((line, index) => {
    context.fillText(line, AVATAR_SIZE / 2, startY + index * lineHeight);
  });

  return {
    blob: await canvasToBlob(canvas),
    dataUrl: canvas.toDataURL('image/png'),
  };
}

async function uploadAvatarToObjectStorage(
  avatarBlob: Blob,
  entity: DialogueCard,
): Promise<string | undefined> {
  const formData = new FormData();
  const fileName = `${entity.imConversationId || entity.userConversationId || Date.now()}.png`;
  formData.append('file', avatarBlob, fileName);
  formData.append('user', STORAGE_USER);

  const response = await fetch(`${STORAGE_FILE_BASE_URL}/upload`, {
    method: 'POST',
    headers: {
      accept: '*/*',
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`头像上传失败: ${response.status}`);
  }

  const uploadResult = await parseUploadResponse(response);
  if (!uploadResult.result || uploadResult.status !== 200 || !uploadResult.data?.fileName) {
    throw new Error(uploadResult.message || '头像上传接口未返回 fileName');
  }

  const downloadUrl = buildDownloadUrl(uploadResult.data.fileName);
  entity.avatar = downloadUrl;
  return downloadUrl;
}

/**
 * 初始化头像图片
 * 唯一id: dialogueCardSingleItem-onInitializeAvatarImage
 */
export const onInitializeAvatarImage = (
  setter: Setter,
  dispatch: Dispatch,
  entity: DialogueCard | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  if (!entity) {
    setter.setAvatarUrl('');
    return;
  }

  if (entity.avatar) {
    setter.setAvatarUrl(entity.avatar);
    return;
  }

  createDialogueAvatar(entity.name)
    .then(async ({ blob, dataUrl }) => {
      setter.setAvatarUrl(dataUrl);

      const downloadUrl = await uploadAvatarToObjectStorage(blob, entity);
      if (downloadUrl) {
        setter.setAvatarUrl(downloadUrl);
      }
    })
    .catch((error) => {
      console.error('初始化对话头像失败:', error);
      setter.setAvatarUrl('');
    });

  /*
   * [END OF YOUR CODE]
   */
};
