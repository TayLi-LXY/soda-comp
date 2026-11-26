import type { ComponentState } from './types';

export const refreshSendMessageFileCardComponentState = (state: ComponentState) => ({
  type: 'SendMessageFileCard/refreshComponentState',
  payload: { ...state },
});
