import type { ComponentState } from './types';

export const refreshTeamMembersOnlineStatusComponentState = (state: ComponentState) => ({
  type: 'TeamMembersOnlineStatus/refreshComponentState',
  payload: { ...state },
});
