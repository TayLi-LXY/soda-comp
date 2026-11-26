import type { ComponentState } from './types';

export const refreshRightComponentComponentState = (state: ComponentState) => ({
  type: 'RightComponent/refreshComponentState',
  payload: { ...state },
});
