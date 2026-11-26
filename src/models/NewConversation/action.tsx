import type { ComponentState } from './types';

export const refreshNewConversationComponentState = (state: ComponentState) => ({
  type: 'NewConversation/refreshComponentState',
  payload: { ...state },
});
