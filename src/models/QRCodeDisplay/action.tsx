import type { ComponentState } from './types';

export const refreshQRCodeDisplayComponentState = (state: ComponentState) => ({
  type: 'QRCodeDisplay/refreshComponentState',
  payload: { ...state },
});
