import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useState } from 'react';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { data } from '../../../src/data';
import './Dashboard.css';

type RowData = {
  name: string;
  color: string;
};

export const Dashboard = () => {
  const [columnDefs] = useState<ColDef<RowData>[]>([
    { headerName: 'Name', field: 'name' },
    { headerName: 'Color', field: 'color' },
  ]);
  const [rowData] = useState<RowData[]>(data.products);

  return (
    <div className="ag-theme-quartz-auto-light ag-grid-container">
      <AgGridReact debug columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};
