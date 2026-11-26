import type { ComponentState } from './types';

export const refreshSummaryOfAttachmentsForSendingInformationItemsComponentState = (state: ComponentState) => ({
  type: 'SummaryOfAttachmentsForSendingInformationItems/refreshComponentState',
  payload: { ...state },
});
