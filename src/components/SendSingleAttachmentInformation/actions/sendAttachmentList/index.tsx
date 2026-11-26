import { onSelectAttachmentInitializeSummaryAndPreview } from './onSelectAttachmentInitializeSummaryAndPreview';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsSendAttachmentList = {
  selectAttachmentCallback: (
    entity: any,
    index: number,
  ) => void;
};

export const eventsSendAttachmentList = (
  setter: Setter,
  dispatch: Dispatch,
  sendMessageFileCardList: any[],
): EventsSendAttachmentList => {
  return {
    selectAttachmentCallback: (entity, index) => onSelectAttachmentInitializeSummaryAndPreview(entity, index, setter, dispatch, sendMessageFileCardList),
  };
};
