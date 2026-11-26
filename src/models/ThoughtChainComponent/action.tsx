import type { ComponentState } from './types';

export const refreshThoughtChainComponentComponentState = (state: ComponentState) => ({
  type: 'ThoughtChainComponent/refreshComponentState',
  payload: { ...state },
});
