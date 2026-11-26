import { onClickAndDragWindowWithMouse } from './onClickAndDragWindowWithMouse';
import React from 'react';
import type { Dispatch } from 'redux';

export type EventsRightComponentDiv1 = {
  onMouseDown: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsRightComponentDiv1 = (
  dispatch: Dispatch,
): EventsRightComponentDiv1 => {
  return {
    onMouseDown: (event) => onClickAndDragWindowWithMouse(event, dispatch),
  };
};
