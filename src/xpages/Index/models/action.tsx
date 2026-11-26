import type { PageState } from './types';

export const refreshIndexPageState = (state: PageState) => ({
  type: 'Index/refreshPageState',
  payload: { ...state },
});
