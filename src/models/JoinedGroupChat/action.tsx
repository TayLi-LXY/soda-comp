import type { ComponentState } from './types';

export const refreshJoinedGroupChatComponentState = (state: ComponentState) => ({
  type: 'JoinedGroupChat/refreshComponentState',
  payload: { ...state },
});
