import { onSelectDialogueCard } from './onSelectDialogueCard';
import React from 'react';
import type { Dispatch } from 'redux';
import type { DialogueCard } from '@/types/com.horsecoder.platform.mall.umi.chat/dialogueCardSingleItem/DialogueCard';
import type { Setter } from '../../setter';

export type EventsDialogueCardSingleItemDiv = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsDialogueCardSingleItemDiv = (
  setter: Setter,
  dispatch: Dispatch,
  selectDialogueCallback: ((index: number) => void) | undefined,
  index: number,
  entity: DialogueCard | undefined,
): EventsDialogueCardSingleItemDiv => {
  return {
    onClick: (event) => onSelectDialogueCard(event, setter, dispatch, selectDialogueCallback, index, entity),
  };
};
