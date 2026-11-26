import type { ComponentState } from './types';

export const refreshRightpMenuComponentState = (state: ComponentState) => ({
  type: 'RightpMenu/refreshComponentState',
  payload: { ...state },
});
