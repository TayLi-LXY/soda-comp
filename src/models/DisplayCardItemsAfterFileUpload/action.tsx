import type { ComponentState } from './types';

export const refreshDisplayCardItemsAfterFileUploadComponentState = (state: ComponentState) => ({
  type: 'DisplayCardItemsAfterFileUpload/refreshComponentState',
  payload: { ...state },
});
