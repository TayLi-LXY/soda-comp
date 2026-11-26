import type { ComponentState } from './types';

export const refreshAGGridComponentState = (state: ComponentState) => ({
  type: 'AGGrid/refreshComponentState',
  payload: { ...state },
});
