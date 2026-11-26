import type { PageState } from './types';

export const refreshPrivacyPolicyPageState = (state: PageState) => ({
  type: 'PrivacyPolicy/refreshPageState',
  payload: { ...state },
});
