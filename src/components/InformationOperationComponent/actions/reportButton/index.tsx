import { onOpenFeedbackAndReportDialogue } from './onOpenFeedbackAndReportDialogue';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsReportButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsReportButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsReportButton => {
  return {
    onClick: (event) => onOpenFeedbackAndReportDialogue(event, setter, dispatch),
  };
};
