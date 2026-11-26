import type { Actions } from './actions';
import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';


export type SendSingleAttachmentInformationWrapperProps =  {
  entity: any;
};

export type SendSingleAttachmentInformationProps = {
  actions: Actions;
  entity: any;
  sendMessageFileCardList: any[];
  setSendMessageFileCardList: (sendMessageFileCardList: any[]) => void;
  uploadFileSummaryVisibleControl: boolean;
  setUploadFileSummaryVisibleControl: (uploadFileSummaryVisibleControl: boolean) => void;
  file: DialogueTaskFile | undefined;
  setFile: (file: DialogueTaskFile | undefined) => void;
};

