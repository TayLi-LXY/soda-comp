import type { ComponentState } from './types';

export const refreshSendASingleMessageComponentState = (state: ComponentState) => ({
  type: 'SendASingleMessage/refreshComponentState',
  payload: { ...state },
});
