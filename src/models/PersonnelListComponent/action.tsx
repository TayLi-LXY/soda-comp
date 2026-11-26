import type { ComponentState } from './types';

export const refreshPersonnelListComponentComponentState = (state: ComponentState) => ({
  type: 'PersonnelListComponent/refreshComponentState',
  payload: { ...state },
});
