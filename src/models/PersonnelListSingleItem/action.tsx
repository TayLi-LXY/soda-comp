import type { ComponentState } from './types';

export const refreshPersonnelListSingleItemComponentState = (state: ComponentState) => ({
  type: 'PersonnelListSingleItem/refreshComponentState',
  payload: { ...state },
});
