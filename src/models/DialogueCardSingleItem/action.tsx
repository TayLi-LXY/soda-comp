import type { ComponentState } from './types';

export const refreshDialogueCardSingleItemComponentState = (state: ComponentState) => ({
  type: 'DialogueCardSingleItem/refreshComponentState',
  payload: { ...state },
});
