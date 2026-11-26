import type { ComponentState } from './types';

export const refreshPromptsComponentComponentState = (state: ComponentState) => ({
  type: 'PromptsComponent/refreshComponentState',
  payload: { ...state },
});
