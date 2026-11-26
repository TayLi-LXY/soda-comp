import type { ComponentState } from './types';

export const refreshPreviewComponentComponentState = (state: ComponentState) => ({
  type: 'PreviewComponent/refreshComponentState',
  payload: { ...state },
});
