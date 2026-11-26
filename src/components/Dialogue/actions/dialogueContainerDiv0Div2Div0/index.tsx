import { onChangesInInputContent } from './onChangesInInputContent';
import { onSubmitTask } from './onSubmitTask';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsDialogueContainerDiv0Div2Div0 = {
  onInputChange: (
    value: string,
  ) => void;
  onSubmit: (
    value: string,
    attachments: AttachmentsItemType[],
  ) => void;
};

export const eventsDialogueContainerDiv0Div2Div0 = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  userConversationId: string | undefined,
  conversationId: string | undefined,
): EventsDialogueContainerDiv0Div2Div0 => {
  return {
    onInputChange: (value) => onChangesInInputContent(value, setter, dispatch),
    onSubmit: (value, attachments) => onSubmitTask(value, attachments, setter, dispatch, loggedinUser, userConversationId, conversationId),
  };
};
