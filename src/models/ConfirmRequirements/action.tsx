import type { ComponentState } from './types';

export const refreshConfirmRequirementsComponentState = (state: ComponentState) => ({
  type: 'ConfirmRequirements/refreshComponentState',
  payload: { ...state },
});
