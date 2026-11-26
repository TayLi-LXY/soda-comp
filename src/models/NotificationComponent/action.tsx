import type { ComponentState } from './types';

export const refreshNotificationComponentComponentState = (state: ComponentState) => ({
  type: 'NotificationComponent/refreshComponentState',
  payload: { ...state },
});
