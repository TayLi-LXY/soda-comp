'use client';
import React, { useEffect, useRef, useState } from 'react';
import { message } from 'antd';
import type { GetProp } from 'antd';
import type { AttachmentsProps } from '@ant-design/x';
import type { DroppedUploadInputWrapperProps } from './types';
import DroppedUploadInputComponent from './index';

const STORAGE_FILE_BASE_URL = '/horsecoder-storage/api/sys/storage/file';
const STORAGE_USER = 'agent';
type AttachmentsItemType = GetProp<AttachmentsProps, 'items'>[number];

type StorageUploadResponse = {
  result: boolean;
  status: number;
  message?: string;
  data?: {
    user?: string;
    fileName?: string;
  };
};

async function parseUploadResponse(response: Response): Promise<StorageUploadResponse> {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('附件上传接口返回格式不是 JSON');
  }
}

async function uploadAttachmentToObjectStorage(file: File) {
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('user', STORAGE_USER);

  const response = await fetch(`${STORAGE_FILE_BASE_URL}/upload`, {
    method: 'POST',
    headers: {
      accept: '*/*',
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`附件上传失败: ${response.status}`);
  }

  const uploadResult = await parseUploadResponse(response);
  if (!uploadResult.result || uploadResult.status !== 200 || !uploadResult.data?.fileName) {
    throw new Error(uploadResult.message || '附件上传接口未返回 fileName');
  }

  return buildDownloadUrl(uploadResult.data.fileName);
}

function buildDownloadUrl(fileName: string) {
  return `${STORAGE_FILE_BASE_URL}/download?user=${STORAGE_USER}&fileName=${fileName}`;
}

function revokeBlobUrl(url?: string) {
  if (url?.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}

/**
 * 组件逻辑: 附件可拖拽上传输入框
 */
const DroppedUploadInputWrapper: React.FC<DroppedUploadInputWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
  */
  // 内部数据: 附件面板开关(open)
  const [open, setOpen] = useState<boolean>(false);
  // 内部数据: 附件列表(attachmentsItems)
  const [attachmentsItems, setAttachmentsItems] = useState<AttachmentsItemType[]>([]);
  const attachmentsItemsRef = useRef<AttachmentsItemType[]>([]);
  const uploadPromisesRef = useRef<Map<string, Promise<void>>>(new Map());
  // 内部数据: 输入值(value)
  const { value } = props;
  // 内部数据: 占位符(placeholder)
  const { placeholder } = props;
  // 内部数据: 是否可用(disabled)
  const { disabled } = props;
  // 内部数据: 是否只读(readOnly)
  const { readOnly } = props;
  // 内部数据: 加载(loading)
  const { loading } = props;
  // 内部数据: 自动调整大小(autoSize)
  const { autoSize } = props;
  // 内部数据: 接受(accept)
  const { accept } = props;
  // 内部数据: 最大文件数(maxCount)
  const { maxCount } = props;
  // 内部数据: 最大容量(maxSize)
  const { maxSize } = props;
  // 内部数据: 输入内容变化回调(onInputChange)
  const { onInputChange } = props;
  // 内部数据: 点击提交按钮的回调(onSubmit)
  const { onSubmit } = props;
  // 内部数据: 点击取消按钮的回调(onCancel)
  const { onCancel } = props;
  // 内部数据: 附件列表变化的回调(onAttachmentsChange)
  const { onAttachmentsChange } = props;

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  useEffect(() => {
    attachmentsItemsRef.current = attachmentsItems;
  }, [attachmentsItems]);

  useEffect(() => {
    return () => {
      attachmentsItemsRef.current.forEach((item) => revokeBlobUrl(item.url));
    };
  }, []);

  const handleAttachmentChange = (file: AttachmentsItemType, fileList: AttachmentsItemType[]) => {
    const uploadTargets: Array<{ uid: string; file: File; blobUrl: string }> = [];
    const removedUid = file.status === 'removed' ? file.uid : undefined;
    if (removedUid) {
      const removedItem = attachmentsItemsRef.current.find((item) => item.uid === removedUid);
      revokeBlobUrl(removedItem?.url);
      uploadPromisesRef.current.delete(removedUid);
    }

    const updatedList = fileList.map((item) => {
      if (item.uid === file.uid && file.status !== 'removed' && item.originFileObj) {
        revokeBlobUrl(item.url);
        const blobUrl = URL.createObjectURL(item.originFileObj);
        uploadTargets.push({ uid: item.uid, file: item.originFileObj, blobUrl });

        return {
          ...item,
          status: 'uploading',
          url: blobUrl,
        };
      }

      return item;
    });
    attachmentsItemsRef.current = updatedList;
    setAttachmentsItems(updatedList);
    onAttachmentsChange?.(updatedList);

    if (uploadTargets.length > 0) {
      setOpen(true);
    }

    uploadTargets.forEach(({ uid, file: uploadFile, blobUrl }) => {
      const uploadPromise = uploadAttachmentToObjectStorage(uploadFile)
        .then((downloadUrl) => {
          revokeBlobUrl(blobUrl);
          if (!attachmentsItemsRef.current.some((item) => item.uid === uid)) {
            return;
          }

          setAttachmentsItems((currentItems) => {
            const nextItems = currentItems.map((item) => {
              if (item.uid !== uid) {
                return item;
              }

              return {
                ...item,
                status: 'done',
                url: downloadUrl,
              };
            });
            attachmentsItemsRef.current = nextItems;
            onAttachmentsChange?.(nextItems);
            return nextItems;
          });
        })
        .catch((error) => {
          console.error('附件上传失败:', error);
          if (!attachmentsItemsRef.current.some((item) => item.uid === uid)) {
            return;
          }

          setAttachmentsItems((currentItems) => {
            const nextItems = currentItems.map((item) => {
              if (item.uid !== uid) {
                return item;
              }

              return {
                ...item,
                status: 'error',
              };
            });
            attachmentsItemsRef.current = nextItems;
            onAttachmentsChange?.(nextItems);
            return nextItems;
          });
        })
        .finally(() => {
          uploadPromisesRef.current.delete(uid);
        });

      uploadPromisesRef.current.set(uid, uploadPromise);
    });
  };

  const handleSubmit = () => {
    const latestAttachmentsItems = attachmentsItemsRef.current;
    if (
      uploadPromisesRef.current.size > 0
      || latestAttachmentsItems.some((item) => item.status === 'uploading')
    ) {
      message.warning('附件还在上传中，请稍后再提交');
      return;
    }

    if (latestAttachmentsItems.some((item) => item.status === 'error')) {
      message.error('存在上传失败的附件，请删除失败附件后重试');
      return;
    }

    onSubmit?.(value || '', latestAttachmentsItems);
    setAttachmentsItems([]);
    setOpen(false);
  };

  /*
   * [END OF YOUR CODE]
   */
  return (
    <DroppedUploadInputComponent
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      loading={loading}
      autoSize={autoSize}
      accept={accept}
      maxCount={maxCount}
      maxSize={maxSize}
      open={open}
      onOpenChange={setOpen}
      attachmentsItems={attachmentsItems}
      onAttachmentChange={handleAttachmentChange}
      onInputChange={onInputChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};

export default DroppedUploadInputWrapper;
