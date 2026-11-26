import type { PageState } from './types';

export const refreshRegisterPageState = (state: PageState) => ({
  type: 'Register/refreshPageState',
  payload: { ...state },
});
