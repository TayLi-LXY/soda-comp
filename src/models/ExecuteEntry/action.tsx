import type { ComponentState } from './types';

export const refreshExecuteEntryComponentState = (state: ComponentState) => ({
  type: 'ExecuteEntry/refreshComponentState',
  payload: { ...state },
});
