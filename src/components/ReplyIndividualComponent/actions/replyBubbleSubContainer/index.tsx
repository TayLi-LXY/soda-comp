import { onClickSwitchQueryResultsAndSeeControl } from './onClickSwitchQueryResultsAndSeeControl';
import React from 'react';
import type { Dispatch } from 'redux';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';
import type { Setter } from '../../setter';

export type EventsReplyBubbleSubContainer = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsReplyBubbleSubContainer = (
  setter: Setter,
  dispatch: Dispatch,
  queryResultsDisplayVisibleControls: boolean,
  entity: DialogueMessage | undefined,
): EventsReplyBubbleSubContainer => {
  return {
    onClick: (event) => onClickSwitchQueryResultsAndSeeControl(event, setter, dispatch, queryResultsDisplayVisibleControls, entity),
  };
};
