import type { ComponentState } from './types';

export const refreshQueryResultDisplayComponentComponentState = (state: ComponentState) => ({
  type: 'QueryResultDisplayComponent/refreshComponentState',
  payload: { ...state },
});
