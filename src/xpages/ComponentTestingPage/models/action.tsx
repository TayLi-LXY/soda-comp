import type { PageState } from './types';

export const refreshComponentTestingPagePageState = (state: PageState) => ({
  type: 'ComponentTestingPage/refreshPageState',
  payload: { ...state },
});
