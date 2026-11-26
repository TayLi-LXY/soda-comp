import type { ComponentState } from './types';

export const refreshQAComponentComponentState = (state: ComponentState) => ({
  type: 'QAComponent/refreshComponentState',
  payload: { ...state },
});

export const refreshQAComponentComponentTitleState = (title: React.ReactNode) => ({
  type: 'QAComponent/refreshComponentTitleState',
  payload: { title },
});

export const refreshQAComponentComponentLoadingState = (loading: boolean | React.ReactNode | undefined) => ({
  type: 'QAComponent/refreshComponentLoadingState',
  payload: { loading },
});
