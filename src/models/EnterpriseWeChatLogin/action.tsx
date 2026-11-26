import type { ComponentState } from './types';

export const refreshEnterpriseWeChatLoginComponentState = (state: ComponentState) => ({
  type: 'EnterpriseWeChatLogin/refreshComponentState',
  payload: { ...state },
});
