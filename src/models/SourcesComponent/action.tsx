import type { ComponentState } from './types';

export const refreshSourcesComponentComponentState = (state: ComponentState) => ({
  type: 'SourcesComponent/refreshComponentState',
  payload: { ...state },
});
