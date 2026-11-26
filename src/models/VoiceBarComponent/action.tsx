import type { ComponentState } from './types';

export const refreshVoiceBarComponentComponentState = (state: ComponentState) => ({
  type: 'VoiceBarComponent/refreshComponentState',
  payload: { ...state },
});
