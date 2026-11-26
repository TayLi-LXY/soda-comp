import type { ComponentState } from './types';

export const refreshTaskListComponentState = (state: ComponentState) => ({
  type: 'TaskList/refreshComponentState',
  payload: { ...state },
});
