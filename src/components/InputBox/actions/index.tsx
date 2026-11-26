import { eventsFileUploadList } from './fileUploadList';
import type { EventsFileUploadList } from './fileUploadList';
import { eventsInputArea } from './inputArea';
import type { EventsInputArea } from './inputArea';
import { eventsSendMessageButton } from './sendMessageButton';
import type { EventsSendMessageButton } from './sendMessageButton';

export type Actions = {
  eventsFileUploadList: EventsFileUploadList;
  eventsInputArea: EventsInputArea;
  eventsSendMessageButton: EventsSendMessageButton;
};

export {
  eventsFileUploadList,
  eventsInputArea,
  eventsSendMessageButton,
};
