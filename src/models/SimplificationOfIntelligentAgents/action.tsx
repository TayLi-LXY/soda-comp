import type { ComponentState } from './types';

export const refreshSimplificationOfIntelligentAgentsComponentState = (state: ComponentState) => ({
  type: 'SimplificationOfIntelligentAgents/refreshComponentState',
  payload: { ...state },
});
