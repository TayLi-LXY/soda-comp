import type { ComponentState } from './types';

export const refreshFilePreviewComponentComponentState = (state: ComponentState) => ({
  type: 'FilePreviewComponent/refreshComponentState',
  payload: { ...state },
});
