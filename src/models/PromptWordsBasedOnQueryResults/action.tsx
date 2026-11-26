import type { ComponentState } from './types';

export const refreshPromptWordsBasedOnQueryResultsComponentState = (state: ComponentState) => ({
  type: 'PromptWordsBasedOnQueryResults/refreshComponentState',
  payload: { ...state },
});
