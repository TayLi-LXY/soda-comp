

export type AGGridWrapperProps =  {
  rowData: any[] | undefined;
  columnDefs: any[] | undefined;
  onRowClicked: (event: any) => void;
  onSelectionChanged: (event: any) => void;
  onGridReady: (event: any) => void;
};

export type AGGridProps = {
  rowData: any[] | undefined;
  columnDefs: any[] | undefined;
  onRowClicked: (event: any) => void;
  onSelectionChanged: (event: any) => void;
  onGridReady: (event: any) => void;
};

