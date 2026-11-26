import type { ComponentState } from './types';

export const refreshSenderComponentComponentState = (state: ComponentState) => ({
  type: 'SenderComponent/refreshComponentState',
  payload: { ...state },
});
