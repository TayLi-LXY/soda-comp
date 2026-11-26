import type { PageState } from './types';

export const refreshTermsOfServicePageState = (state: PageState) => ({
  type: 'TermsOfService/refreshPageState',
  payload: { ...state },
});
