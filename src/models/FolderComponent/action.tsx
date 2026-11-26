import type { ComponentState } from './types';

export const refreshFolderComponentComponentState = (state: ComponentState) => ({
  type: 'FolderComponent/refreshComponentState',
  payload: { ...state },
});
