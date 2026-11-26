import type { ComponentState } from './types';

export const refreshQASingleComponentComponentState = (state: ComponentState) => ({
  type: 'QASingleComponent/refreshComponentState',
  payload: { ...state },
});
