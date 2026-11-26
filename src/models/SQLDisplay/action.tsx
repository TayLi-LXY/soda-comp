import type { ComponentState } from './types';

export const refreshSQLDisplayComponentState = (state: ComponentState) => ({
  type: 'SQLDisplay/refreshComponentState',
  payload: { ...state },
});
