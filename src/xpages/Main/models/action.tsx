import type { PageState } from './types';

export const refreshMainPageState = (state: PageState) => ({
  type: 'Main/refreshPageState',
  payload: { ...state },
});

export const refreshMainPageVisibleControlSignalDataState = (visibleControlSignalData: string | undefined) => ({
  type: 'Main/refreshPageVisibleControlSignalDataState',
  payload: { visibleControlSignalData },
});

export const refreshMainPageUpgradePlanVisibleState = (upgradePlanVisible: boolean) => ({
  type: 'Main/refreshPageUpgradePlanVisibleState',
  payload: { upgradePlanVisible },
});
