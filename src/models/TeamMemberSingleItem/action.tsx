import type { ComponentState } from './types';

export const refreshTeamMemberSingleItemComponentState = (state: ComponentState) => ({
  type: 'TeamMemberSingleItem/refreshComponentState',
  payload: { ...state },
});
