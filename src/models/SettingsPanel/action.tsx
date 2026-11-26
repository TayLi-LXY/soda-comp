import type { ComponentState } from './types';

export const refreshSettingsPanelComponentState = (state: ComponentState) => ({
  type: 'SettingsPanel/refreshComponentState',
  payload: { ...state },
});
