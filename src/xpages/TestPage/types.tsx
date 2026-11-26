import type { Actions } from './actions';

export type TestPageWrapperProps =  {
};

export type TestPageProps = {
  actions: Actions;
  documents: string[] | undefined;
  setDocuments: (documents: string[] | undefined) => void;
  filePreviewVisibleControl: boolean;
  setFilePreviewVisibleControl: (filePreviewVisibleControl: boolean) => void;
  rowData: any[] | undefined;
  setRowData: (rowData: any[] | undefined) => void;
  columnDefs: any[] | undefined;
  setColumnDefs: (columnDefs: any[] | undefined) => void;
  onRowClicked: (event: any) => void;
  setOnRowClicked: (onRowClicked: (event: any) => void) => void;
  onSelectionChanged: (event: any) => void;
  setOnSelectionChanged: (onSelectionChanged: (event: any) => void) => void;
  onGridReady: (event: any) => void;
  setOnGridReady: (onGridReady: (event: any) => void) => void;
  aggridVisibleControl: boolean;
  setAggridVisibleControl: (aggridVisibleControl: boolean) => void;
  gridVisibleControl: boolean;
  setGridVisibleControl: (gridVisibleControl: boolean) => void;
};
