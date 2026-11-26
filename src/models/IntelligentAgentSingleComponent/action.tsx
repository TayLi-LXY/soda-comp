import type { ComponentState } from './types';

export const refreshIntelligentAgentSingleComponentComponentState = (state: ComponentState) => ({
  type: 'IntelligentAgentSingleComponent/refreshComponentState',
  payload: { ...state },
});
