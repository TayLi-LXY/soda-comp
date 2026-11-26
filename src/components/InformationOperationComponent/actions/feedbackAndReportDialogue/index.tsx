import { onFeedbackAndReportDialogueCancel } from './onFeedbackAndReportDialogueCancel';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsFeedbackAndReportDialogue = {
  onCancel: (
    event: any,
  ) => Promise<void>;
};

export const eventsFeedbackAndReportDialogue = (
  setter: Setter,
  dispatch: Dispatch,
): EventsFeedbackAndReportDialogue => {
  return {
    onCancel: (event) => onFeedbackAndReportDialogueCancel(event, setter, dispatch),
  };
};
