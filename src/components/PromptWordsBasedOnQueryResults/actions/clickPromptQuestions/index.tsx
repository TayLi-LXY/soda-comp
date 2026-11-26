import { onClickOnPromptSetUpProblemSendMessage } from './onClickOnPromptSetUpProblemSendMessage';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsClickPromptQuestions = {
  onItemClick: (
    info: any,
  ) => void;
};

export const eventsClickPromptQuestions = (
  setter: Setter,
  dispatch: Dispatch,
): EventsClickPromptQuestions => {
  return {
    onItemClick: (info) => onClickOnPromptSetUpProblemSendMessage(info, setter, dispatch),
  };
};
