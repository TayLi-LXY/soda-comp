import type { Actions } from './actions';


export type RightpMenuWrapperProps =  {
};

export type RightpMenuProps = {
  actions: Actions;
  previewVisible: boolean;
  setPreviewVisible: (previewVisible: boolean) => void;
  codeVisible: boolean;
  setCodeVisible: (codeVisible: boolean) => void;
  pageVisible: boolean;
  setPageVisible: (pageVisible: boolean) => void;
  flowVisible: boolean;
  setFlowVisible: (flowVisible: boolean) => void;
};

