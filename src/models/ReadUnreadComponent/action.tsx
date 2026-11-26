import type { ComponentState } from './types';

export const refreshReadUnreadComponentComponentState = (state: ComponentState) => ({
  type: 'ReadUnreadComponent/refreshComponentState',
  payload: { ...state },
});
