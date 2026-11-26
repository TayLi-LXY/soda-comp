import type { Actions } from './actions';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';


export type QueryResultDisplayComponentWrapperProps =  {
  entity: DialogueMessage | undefined;
  resultRefreshSignal: string | undefined;
};

export type QueryResultDisplayComponentProps = {
  actions: Actions;
  entity: DialogueMessage | undefined;
  messageId: string | undefined;
  setMessageId: (messageId: string | undefined) => void;
  ifStream: boolean;
  setIfStream: (ifStream: boolean) => void;
  messageContent: string | undefined;
  setMessageContent: (messageContent: string | undefined) => void;
  resultRefreshSignal: string | undefined;
  sQLComponentVisibleControl: boolean;
  setSQLComponentVisibleControl: (sQLComponentVisibleControl: boolean) => void;
  summarizeContent: string | undefined;
  setSummarizeContent: (summarizeContent: string | undefined) => void;
  visibleControlOfChartComponent: boolean;
  setVisibleControlOfChartComponent: (visibleControlOfChartComponent: boolean) => void;
  fileUrl: string | undefined;
  setFileUrl: (fileUrl: string | undefined) => void;
  items: any[] | undefined;
  setItems: (items: any[] | undefined) => void;
};

