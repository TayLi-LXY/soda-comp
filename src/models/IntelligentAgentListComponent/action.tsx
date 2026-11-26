import type { ComponentState } from './types';

export const refreshIntelligentAgentListComponentComponentState = (state: ComponentState) => ({
  type: 'IntelligentAgentListComponent/refreshComponentState',
  payload: { ...state },
});
