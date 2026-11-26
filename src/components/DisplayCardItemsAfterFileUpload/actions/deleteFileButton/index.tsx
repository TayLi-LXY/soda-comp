import { onDeleteSpecifiedIndexFile } from './onDeleteSpecifiedIndexFile';
import type { Dispatch } from 'redux';

export type EventsDeleteFileButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsDeleteFileButton = (
  dispatch: Dispatch,
  index: number,
  deleteFileCallback: ((index: number) => void) | undefined,
): EventsDeleteFileButton => {
  return {
    onClick: (event) => onDeleteSpecifiedIndexFile(event, dispatch, index, deleteFileCallback),
  };
};
