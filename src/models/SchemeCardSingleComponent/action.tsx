import type { ComponentState } from './types';

export const refreshSchemeCardSingleComponentComponentState = (state: ComponentState) => ({
  type: 'SchemeCardSingleComponent/refreshComponentState',
  payload: { ...state },
});
