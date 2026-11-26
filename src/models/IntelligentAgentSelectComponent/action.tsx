import type { ComponentState } from './types';

export const refreshIntelligentAgentSelectComponentComponentState = (state: ComponentState) => ({
  type: 'IntelligentAgentSelectComponent/refreshComponentState',
  payload: { ...state },
});
