import type { PageState } from './types';

export const refreshLogInPageState = (state: PageState) => ({
  type: 'LogIn/refreshPageState',
  payload: { ...state },
});
