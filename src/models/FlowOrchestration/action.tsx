import type { ComponentState } from './types';

export const refreshFlowOrchestrationComponentState = (state: ComponentState) => ({
  type: 'FlowOrchestration/refreshComponentState',
  payload: { ...state },
});
