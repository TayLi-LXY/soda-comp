import type { ComponentState } from './types';

export const refreshSuggestionComponentComponentState = (state: ComponentState) => ({
  type: 'SuggestionComponent/refreshComponentState',
  payload: { ...state },
});
