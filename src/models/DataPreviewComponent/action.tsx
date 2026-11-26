import type { ComponentState } from './types';

export const refreshDataPreviewComponentComponentState = (state: ComponentState) => ({
  type: 'DataPreviewComponent/refreshComponentState',
  payload: { ...state },
});
