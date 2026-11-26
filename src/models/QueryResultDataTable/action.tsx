import type { ComponentState } from './types';

export const refreshQueryResultDataTableComponentState = (state: ComponentState) => ({
  type: 'QueryResultDataTable/refreshComponentState',
  payload: { ...state },
});
