

export type FolderComponentWrapperProps =  {
  treeData: any[];
  selectable: boolean;
  emptyRender: false | React.ReactNode | (() => React.ReactNode);
};

export type FolderComponentProps = {
  treeData: any[];
  selectable: boolean;
  emptyRender: false | React.ReactNode | (() => React.ReactNode);
};

