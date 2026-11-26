import type { ComponentState } from './types';

export const refreshModelCanvasComponentState = (state: ComponentState) => ({
  type: 'ModelCanvas/refreshComponentState',
  payload: { ...state },
});
