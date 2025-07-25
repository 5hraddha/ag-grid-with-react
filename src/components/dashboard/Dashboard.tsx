import { useMemo, useState } from 'react';
import { ColDef, themeQuartz } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { data } from '../../data';
import './Dashboard.css';

interface RowData {
  id: number;
  accountId: number;
  customerId: number;
  dateOfOrder: Date;
  account: {
    id: number;
    customerId: number;
    accountNumber: string;
    name: string;
    amount: string;
  };
  customer: {
    name: string;
  };
  orderItems: {
    orderId: number;
    productId: number;
    quantity: number;
  }[];
  total: number;
}

export const Dashboard = () => {
  const [columnDefs] = useState<ColDef<RowData>[]>([
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      filter: true,
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      filter: 'agDateColumnFilter',
    },
    {
      headerName: 'Total',
      field: 'total',
      filter: 'agTextColumnFilter',
    },
  ]);

  /**
   * Use orders from /data.json file and join with account and customer data.
   * dateOfOrder is a Date object with a hard coded time
   */
  const rowData = useMemo<RowData[]>(() => {
    return data.orders.map((order) => ({
      ...order,
      // create Date object value for dateOfOrder field
      dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
      account: data.accounts.find((account) => account.id === order.accountId)!,
      customer: data.customers.find((customer) => customer.id === order.customerId)!,
      orderItems: data.orderItems.filter((item) => item.orderId === order.id),
      total: data.orderItems
        .filter((item) => item.orderId === order.id)
        .map((item) => data.products.find((product) => product.id === item.productId))
        .reduce((prev, current) => prev + Number(current!.price), 0),
    }));
  }, [data]);

  return (
    <div className="ag-grid-container">
      <AgGridReact debug theme={themeQuartz} columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};
