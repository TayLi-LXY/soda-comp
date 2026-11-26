import type { ComponentState } from './types';

export const refreshAttachmentsComponentComponentState = (state: ComponentState) => ({
  type: 'AttachmentsComponent/refreshComponentState',
  payload: { ...state },
});
