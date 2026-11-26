
export type GridComponentWrapperProps =  {
  rowData: any[] | undefined;
  columnDefs: any[] | undefined;
  onRowClicked?: (event: any) => void;
  onSelectionChanged?: (event: any) => void;
  onGridReady?: (params: any) => void;
};

export type GridComponentProps = {
  rowData: any[];
  columnDefs: any[];
  onRowClicked?: (event: any) => void;
  onSelectionChanged?: (event: any) => void;
  onGridReady?: (params: any) => void;
};
