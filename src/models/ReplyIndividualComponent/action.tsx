import type { ComponentState } from './types';

export const refreshReplyIndividualComponentComponentState = (state: ComponentState) => ({
  type: 'ReplyIndividualComponent/refreshComponentState',
  payload: { ...state },
});
