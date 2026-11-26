import type { ComponentState } from './types';

export const refreshPageDesignComponentState = (state: ComponentState) => ({
  type: 'PageDesign/refreshComponentState',
  payload: { ...state },
});
