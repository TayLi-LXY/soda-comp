import type { ComponentState } from './types';

export const refreshWeChatLoginComponentState = (state: ComponentState) => ({
  type: 'WeChatLogin/refreshComponentState',
  payload: { ...state },
});
