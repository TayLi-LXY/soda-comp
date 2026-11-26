import type { ComponentState } from './types';

export const refreshActionsComponentComponentState = (state: ComponentState) => ({
  type: 'ActionsComponent/refreshComponentState',
  payload: { ...state },
});
