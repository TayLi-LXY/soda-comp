import type { ComponentState } from './types';

export const refreshListOfIntelligentAgentMembersComponentState = (state: ComponentState) => ({
  type: 'ListOfIntelligentAgentMembers/refreshComponentState',
  payload: { ...state },
});
