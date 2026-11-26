import { onClickSendUserMessage } from './onClickSendUserMessage';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsSendMessageButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsSendMessageButton = (
  setter: Setter,
  dispatch: Dispatch,
  selectedllm: string | undefined,
  userUploadedFileList: any[],
  inputContent: string,
  conversationId: string,
  userConversationId: string | undefined,
  loggedinUser: User | undefined,
): EventsSendMessageButton => {
  return {
    onClick: (event) => onClickSendUserMessage(event, setter, dispatch, selectedllm, userUploadedFileList, inputContent, conversationId, userConversationId, loggedinUser),
  };
};
