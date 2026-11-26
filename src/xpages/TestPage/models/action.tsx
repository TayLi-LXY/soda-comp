import type { PageState } from './types';

export const refreshTestPagePageState = (state: PageState) => ({
  type: 'TestPage/refreshPageState',
  payload: { ...state },
});
