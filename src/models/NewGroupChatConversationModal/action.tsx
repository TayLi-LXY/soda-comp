import type { ComponentState } from './types';

export const refreshNewGroupChatConversationModalComponentState = (state: ComponentState) => ({
  type: 'NewGroupChatConversationModal/refreshComponentState',
  payload: { ...state },
});
