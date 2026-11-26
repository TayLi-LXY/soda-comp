import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';


export type GroupFileWrapperProps =  {
  dialogueFileList: DialogueFile[];
};

export type GroupFileProps = {
  dialogueFileList: DialogueFile[];
  groupFileList: any[];
  setGroupFileList: (groupFileList: any[]) => void;
};

