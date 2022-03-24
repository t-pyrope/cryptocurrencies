import { TableCell, TableRow } from '@mui/material';
import React from 'react';

interface DetailTableRowProps {
    title: string,
    text: string | Date | number
}

function DetailTableRow({ title, text }: DetailTableRowProps) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">{title}</TableCell>
      <TableCell align="right">{text}</TableCell>
    </TableRow>
  );
}

export default DetailTableRow;
