import type { ComponentState } from './types';

export const refreshThreePointComponentComponentState = (state: ComponentState) => ({
  type: 'ThreePointComponent/refreshComponentState',
  payload: { ...state },
});
