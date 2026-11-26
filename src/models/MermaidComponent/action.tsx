import type { ComponentState } from './types';

export const refreshMermaidComponentComponentState = (state: ComponentState) => ({
  type: 'MermaidComponent/refreshComponentState',
  payload: { ...state },
});
