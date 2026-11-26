import type { ComponentState } from './types';

export const refreshLargeModelReplyComponentComponentState = (state: ComponentState) => ({
  type: 'LargeModelReplyComponent/refreshComponentState',
  payload: { ...state },
});
