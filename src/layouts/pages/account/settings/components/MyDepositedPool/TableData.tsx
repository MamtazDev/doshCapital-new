// TableData.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { TextAlign } from './types'; 

interface TableDataProps {
  table: {
    columns: Array<{ Header: string; accessor: string; width?: string; align?: TextAlign }>;
    rows: Array<{ [key: string]: React.ReactNode }>;
  };
  entriesPerPage?: boolean;
  showTotalEntries?: boolean;
  isSorted?: boolean;
  noEndBorder?: boolean;
}

const TableData: React.FC<TableDataProps> = ({ table }) => {
  return (
    <Table>
      <>
        <TableRow>
          {table.columns.map((column) => (
            <TableCell
              key={column.accessor}
              style={{ width:'800px', textAlign: column.align , color: 'white',}}
            >
              {column.Header}
            </TableCell>
          ))}
        </TableRow>
      </>
      <>
        {table.rows.map((row, index) => (
          <TableRow key={index}>
            {table.columns.map((column) => (
              <TableCell
                key={column.accessor}
                style={{ textAlign: column.align }}
              >
                {row[column.accessor]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    </Table>
  );
};

export default TableData;
