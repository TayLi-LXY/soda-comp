import type { ComponentState } from './types';

export const refreshFeishuLoginComponentState = (state: ComponentState) => ({
  type: 'FeishuLogin/refreshComponentState',
  payload: { ...state },
});
