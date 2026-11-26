import type { ComponentState } from './types';

export const refreshSendSingleAttachmentInformationComponentState = (state: ComponentState) => ({
  type: 'SendSingleAttachmentInformation/refreshComponentState',
  payload: { ...state },
});
