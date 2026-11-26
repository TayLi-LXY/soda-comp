import type { ComponentState } from './types';

export const refreshScanQRCodeOnWeChatAndBindYourPhoneNumberComponentState = (state: ComponentState) => ({
  type: 'ScanQRCodeOnWeChatAndBindYourPhoneNumber/refreshComponentState',
  payload: { ...state },
});
