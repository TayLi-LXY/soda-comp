import type { ComponentState } from './types';

export const refreshCodeHighlightingComponentState = (state: ComponentState) => ({
  type: 'CodeHighlighting/refreshComponentState',
  payload: { ...state },
});
