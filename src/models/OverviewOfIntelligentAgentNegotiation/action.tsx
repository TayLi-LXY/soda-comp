import type { ComponentState } from './types';

export const refreshOverviewOfIntelligentAgentNegotiationComponentState = (state: ComponentState) => ({
  type: 'OverviewOfIntelligentAgentNegotiation/refreshComponentState',
  payload: { ...state },
});
