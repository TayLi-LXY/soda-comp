import { onDeleteSpecifiedIndexFile } from './onDeleteSpecifiedIndexFile';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsFileUploadList = {
  deleteFileCallback: (
    index: number,
  ) => void;
};

export const eventsFileUploadList = (
  setter: Setter,
  dispatch: Dispatch,
  userUploadedFileList: any[],
): EventsFileUploadList => {
  return {
    deleteFileCallback: (index) => onDeleteSpecifiedIndexFile(index, setter, dispatch, userUploadedFileList),
  };
};
