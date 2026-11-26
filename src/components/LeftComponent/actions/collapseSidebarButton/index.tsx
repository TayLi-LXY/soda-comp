import { onClickCollapseLeftSidebar } from './onClickCollapseLeftSidebar';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsCollapseSidebarButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsCollapseSidebarButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsCollapseSidebarButton => {
  return {
    onClick: (event) => onClickCollapseLeftSidebar(event, setter, dispatch),
  };
};
