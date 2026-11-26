import type { ComponentState } from './types';

export const refreshLeftComponentComponentState = (state: ComponentState) => ({
  type: 'LeftComponent/refreshComponentState',
  payload: { ...state },
});

export const refreshLeftComponentComponentDialogueListRefreshSignalState = (dialogueListRefreshSignal: string | undefined) => ({
  type: 'LeftComponent/refreshComponentDialogueListRefreshSignalState',
  payload: { dialogueListRefreshSignal },
});

export const refreshLeftComponentComponentSetPanelVisibleControlsState = (setPanelVisibleControls: boolean) => ({
  type: 'LeftComponent/refreshComponentSetPanelVisibleControlsState',
  payload: { setPanelVisibleControls },
});
