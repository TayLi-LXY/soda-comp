import { onModifySelectedConversationStatus } from './onModifySelectedConversationStatus';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsLeftComponentDiv1Div1Div1Div1Div0 = {
  selectDialogueCallback: (
    index: number,
  ) => void;
};

export const eventsLeftComponentDiv1Div1Div1Div1Div0 = (
  setter: Setter,
  dispatch: Dispatch,
  dialogueCardList: any[],
): EventsLeftComponentDiv1Div1Div1Div1Div0 => {
  return {
    selectDialogueCallback: (index) => onModifySelectedConversationStatus(index, setter, dispatch, dialogueCardList),
  };
};
