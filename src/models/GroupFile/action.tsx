import type { ComponentState } from './types';

export const refreshGroupFileComponentState = (state: ComponentState) => ({
  type: 'GroupFile/refreshComponentState',
  payload: { ...state },
});
