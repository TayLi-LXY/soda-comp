import type { ComponentState } from './types';

export const refreshTeamHomepageDisplayComponentComponentState = (state: ComponentState) => ({
  type: 'TeamHomepageDisplayComponent/refreshComponentState',
  payload: { ...state },
});
