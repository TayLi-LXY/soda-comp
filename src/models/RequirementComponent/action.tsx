import type { ComponentState } from './types';

export const refreshRequirementComponentComponentState = (state: ComponentState) => ({
  type: 'RequirementComponent/refreshComponentState',
  payload: { ...state },
});
