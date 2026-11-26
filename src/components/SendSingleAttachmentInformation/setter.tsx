import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';


export type Setter = {
  // 发送消息文件卡片列表设置
  setSendMessageFileCardList: React.Dispatch<React.SetStateAction<any[]>>;
  // 上传文件摘要可见控制设置
  setUploadFileSummaryVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 文件设置
  setFile: React.Dispatch<React.SetStateAction<DialogueTaskFile | undefined>>;
};