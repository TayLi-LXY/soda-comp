import type { PageState } from './types';

export const refreshScanedPageState = (state: PageState) => ({
  type: 'Scaned/refreshPageState',
  payload: { ...state },
});
