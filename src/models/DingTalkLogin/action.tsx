import type { ComponentState } from './types';

export const refreshDingTalkLoginComponentState = (state: ComponentState) => ({
  type: 'DingTalkLogin/refreshComponentState',
  payload: { ...state },
});
