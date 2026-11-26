import type { ComponentState } from './types';

export const refreshOrderSelectComponentState = (state: ComponentState) => ({
  type: 'OrderSelect/refreshComponentState',
  payload: { ...state },
});
