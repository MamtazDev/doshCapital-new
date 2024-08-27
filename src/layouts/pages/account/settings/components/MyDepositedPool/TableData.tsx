// TableData.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { TextAlign } from './types'; // Import TextAlign type

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
      <TableHead>
        <TableRow>
          {table.columns.map((column) => (
            <TableCell
              key={column.accessor}
              style={{ width: column.width, textAlign: column.align }}
            >
              {column.Header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
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
      </TableBody>
    </Table>
  );
};

export default TableData;
