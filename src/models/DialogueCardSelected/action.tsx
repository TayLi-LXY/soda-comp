import type { ComponentState } from './types';

export const refreshDialogueCardSelectedComponentState = (state: ComponentState) => ({
  type: 'DialogueCardSelected/refreshComponentState',
  payload: { ...state },
});
