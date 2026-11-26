import type { Actions } from './actions';


export type InformationOperationComponentWrapperProps =  {
};

export type InformationOperationComponentProps = {
  actions: Actions;
  feedbackAndReportDialogueVisible: boolean;
  setFeedbackAndReportDialogueVisible: (feedbackAndReportDialogueVisible: boolean) => void;
};

