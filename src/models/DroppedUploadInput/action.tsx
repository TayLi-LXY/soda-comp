import type { ComponentState } from './types';

export const refreshDroppedUploadInputComponentState = (state: ComponentState) => ({
  type: 'DroppedUploadInput/refreshComponentState',
  payload: { ...state },
});
