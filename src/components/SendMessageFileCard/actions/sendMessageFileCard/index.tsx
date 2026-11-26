import { onClickExpandDataSummary } from './onClickExpandDataSummary';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsSendMessageFileCard = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsSendMessageFileCard = (
  setter: Setter,
  dispatch: Dispatch,
  entity: any,
  index: number,
  selectAttachmentCallback: ((entity: any, index: number) => void) | undefined,
): EventsSendMessageFileCard => {
  return {
    onClick: (event) => onClickExpandDataSummary(event, setter, dispatch, entity, index, selectAttachmentCallback),
  };
};
