import type { PageState, QRCodeDisplayState } from './types';

export const refreshPaymentPageState = (state: PageState) => ({
  type: 'Payment/refreshPageState',
  payload: { ...state },
});

export const refreshPaymentQRCodeDisplayState = (state: QRCodeDisplayState) => ({
  type: 'Payment/refreshQRCodeDisplayState',
  payload: { ...state },
});
