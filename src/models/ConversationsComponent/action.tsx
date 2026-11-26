import type { ComponentState } from './types';

export const refreshConversationsComponentComponentState = (state: ComponentState) => ({
  type: 'ConversationsComponent/refreshComponentState',
  payload: { ...state },
});
