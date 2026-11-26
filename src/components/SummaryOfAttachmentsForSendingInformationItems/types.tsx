import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';


export type SummaryOfAttachmentsForSendingInformationItemsWrapperProps =  {
  file: DialogueTaskFile | undefined;
};

export type SummaryOfAttachmentsForSendingInformationItemsProps = {
  summaryContent: string | undefined;
  setSummaryContent: (summaryContent: string | undefined) => void;
  file: DialogueTaskFile | undefined;
};

