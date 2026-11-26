import type { Actions } from './actions';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';


export type ReplyIndividualComponentWrapperProps =  {
  entity: DialogueMessage | undefined;
  index: number;
};

export type ReplyIndividualComponentProps = {
  actions: Actions;
  entity: DialogueMessage | undefined;
  index: number;
  messageContent: string;
  setMessageContent: (messageContent: string) => void;
  intelligentAgentNicknameVisibleControl: boolean;
  setIntelligentAgentNicknameVisibleControl: (intelligentAgentNicknameVisibleControl: boolean) => void;
  characterVisibilityControl: boolean;
  setCharacterVisibilityControl: (characterVisibilityControl: boolean) => void;
  resultRefreshSignal: string | undefined;
  setResultRefreshSignal: (resultRefreshSignal: string | undefined) => void;
  ifTypewriter: boolean;
  setIfTypewriter: (ifTypewriter: boolean) => void;
  queryResultsDisplayVisibleControls: boolean;
  setQueryResultsDisplayVisibleControls: (queryResultsDisplayVisibleControls: boolean) => void;
  customLargeModelReplyVisibleControl: boolean;
  setCustomLargeModelReplyVisibleControl: (customLargeModelReplyVisibleControl: boolean) => void;
  largeModelReplyComponentVisibleControl: boolean;
  setLargeModelReplyComponentVisibleControl: (largeModelReplyComponentVisibleControl: boolean) => void;
  replyReadUnreadVisibleControl: boolean;
  setReplyReadUnreadVisibleControl: (replyReadUnreadVisibleControl: boolean) => void;
  responseMessageOperationVisibleControl: boolean;
  setResponseMessageOperationVisibleControl: (responseMessageOperationVisibleControl: boolean) => void;
};

