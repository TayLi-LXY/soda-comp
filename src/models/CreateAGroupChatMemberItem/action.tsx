import type { ComponentState } from './types';

export const refreshCreateAGroupChatMemberItemComponentState = (state: ComponentState) => ({
  type: 'CreateAGroupChatMemberItem/refreshComponentState',
  payload: { ...state },
});
