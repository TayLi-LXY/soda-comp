

export type TableVisualizationWrapperProps =  {
  previewUrlOfSelectedSchema: string | undefined;
};

export type TableVisualizationProps = {
  previewUrlOfSelectedSchema: string | undefined;
  fileList: File[];
  setFileList: (fileList: File[]) => void;
};

