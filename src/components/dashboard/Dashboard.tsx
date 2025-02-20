import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';

type RowData = {
  name: string;
  color: string;
};

export const Dashboard = () => {
  const [columnDefs, setColumnDefs] = useState<ColDef<RowData>[]>([
    { headerName: 'Name', field: 'name' },
    { headerName: 'Color', field: 'color' },
  ]);

  return (
    <div className="ag-theme-quartz-auto-light">
      <AgGridReact columnDefs={columnDefs} />
    </div>
  );
};
