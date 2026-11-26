import type { ComponentState } from './types';

export const refreshDataModeComponentState = (state: ComponentState) => ({
  type: 'DataMode/refreshComponentState',
  payload: { ...state },
});
