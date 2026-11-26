import type { ComponentState } from './types';

export const refreshDialogueQAComponentComponentState = (state: ComponentState) => ({
  type: 'DialogueQAComponent/refreshComponentState',
  payload: { ...state },
});
