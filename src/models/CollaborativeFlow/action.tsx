import type { ComponentState } from './types';

export const refreshCollaborativeFlowComponentState = (state: ComponentState) => ({
  type: 'CollaborativeFlow/refreshComponentState',
  payload: { ...state },
});
