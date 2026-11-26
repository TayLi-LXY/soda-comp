import type { ComponentState } from './types';

export const refreshFileCardComponentComponentState = (state: ComponentState) => ({
  type: 'FileCardComponent/refreshComponentState',
  payload: { ...state },
});
