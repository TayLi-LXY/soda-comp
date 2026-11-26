import type { ComponentState } from './types';

export const refreshTeamMembersInviteComponentComponentState = (state: ComponentState) => ({
  type: 'TeamMembersInviteComponent/refreshComponentState',
  payload: { ...state },
});
