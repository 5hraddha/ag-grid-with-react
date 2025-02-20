import { useState } from 'react';
import { ColDef, themeQuartz } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { data } from '../../../src/data';
import './Dashboard.css';

type RowData = {
  name: string;
  color: string;
};

export const Dashboard = () => {
  const defaultColDef: ColDef<RowData> = {
    sortable: true,
    sortingOrder: ['asc', null],
  };
  const [columnDefs] = useState<ColDef<RowData>[]>([
    { headerName: 'Product Name', field: 'name', sortingOrder: ['asc', 'desc'] },
    { headerName: 'Color', field: 'color' },
  ]);
  const [rowData] = useState<RowData[]>(data.products);

  return (
    <div className="ag-theme-material-auto-light ag-grid-container">
      <AgGridReact
        debug
        theme={themeQuartz}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        rowData={rowData}
        multiSortKey="ctrl"
      />
    </div>
  );
};
