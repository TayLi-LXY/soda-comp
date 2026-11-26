import { onInitializeSendingAttachmentList } from './sendAttachments/onInitializeSendingAttachmentList';
import { eventsSendAttachmentList } from './sendAttachmentList';
import type { EventsSendAttachmentList } from './sendAttachmentList';

export type Actions = {
  eventsSendAttachmentList: EventsSendAttachmentList;
};

export {
  onInitializeSendingAttachmentList,
  eventsSendAttachmentList,
};
