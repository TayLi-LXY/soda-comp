import type { ComponentState } from './types';

export const refreshDialogueModeSwitchingComponentComponentState = (state: ComponentState) => ({
  type: 'DialogueModeSwitchingComponent/refreshComponentState',
  payload: { ...state },
});
