import type { ComponentState } from './types';

export const refreshTheBigModelThinkingComponentState = (state: ComponentState) => ({
  type: 'TheBigModelThinking/refreshComponentState',
  payload: { ...state },
});
