import type { ComponentState } from './types';

export const refreshQuerySummaryComponentComponentState = (state: ComponentState) => ({
  type: 'QuerySummaryComponent/refreshComponentState',
  payload: { ...state },
});
