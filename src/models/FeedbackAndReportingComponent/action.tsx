import type { ComponentState } from './types';

export const refreshFeedbackAndReportingComponentComponentState = (state: ComponentState) => ({
  type: 'FeedbackAndReportingComponent/refreshComponentState',
  payload: { ...state },
});
