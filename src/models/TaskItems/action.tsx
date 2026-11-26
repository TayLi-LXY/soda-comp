import type { ComponentState } from './types';

export const refreshTaskItemsComponentState = (state: ComponentState) => ({
  type: 'TaskItems/refreshComponentState',
  payload: { ...state },
});
