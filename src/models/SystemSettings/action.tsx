import type { ComponentState } from './types';

export const refreshSystemSettingsComponentState = (state: ComponentState) => ({
  type: 'SystemSettings/refreshComponentState',
  payload: { ...state },
});
