import type { ComponentState } from './types';

export const refreshPanelComponentState = (state: ComponentState) => ({
  type: 'Panel/refreshComponentState',
  payload: { ...state },
});

export const refreshPanelComponentActiveSubpanelState = (activeSubpanel: string | undefined) => ({
  type: 'Panel/refreshComponentActiveSubpanelState',
  payload: { activeSubpanel },
});
