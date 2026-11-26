

export type QueryResultDataTableWrapperProps =  {
  fileUrl: string | undefined;
};

export type QueryResultDataTableProps = {
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
  fileUrl: string | undefined;
};

