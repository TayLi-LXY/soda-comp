import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';


export type Setter = {
  // 对话文件列表设置
  setDialogueFileList: React.Dispatch<React.SetStateAction<DialogueFile[]>>;
  // 对话面板宽度设置
  setDialogWidth: React.Dispatch<React.SetStateAction<number>>;
  // 聊天标题内容设置
  setChatTitleContent: React.Dispatch<React.SetStateAction<string>>;
  // 对话模式切换可见控制设置
  setDialogueModeSwitchingVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 聊天记录列表控制设置
  setChatRecordListControl: React.Dispatch<React.SetStateAction<any[]>>;
  // 左侧对话框可见控制设置
  setLeftSideDialogVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 文本输入值设置
  setInputBoxValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 占位符设置
  setPlaceholder: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 是否禁用设置
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  // 只读设置
  setReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
  // loading状态设置
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // 自适应内容高度设置
  setAutoSize: React.Dispatch<React.SetStateAction<any>>;
  // 文件最大个数设置
  setMaxCount: React.Dispatch<React.SetStateAction<number>>;
  // 文件最大大小设置
  setMaxSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 群聊设置抽屉可见控制设置
  setGroupChatSettingsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
};