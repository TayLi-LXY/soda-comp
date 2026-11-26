import type { ComponentState } from './types';

export const refreshBubbleComponentComponentState = (state: ComponentState) => ({
  type: 'BubbleComponent/refreshComponentState',
  payload: { ...state },
});
