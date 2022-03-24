import { Avatar, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencySimple } from '../models/currency';

interface DataTableRowProps {
    currency: CurrencySimple
}

function DataTableRow({ currency }: DataTableRowProps) {
  const navigate = useNavigate();

  return (
    <TableRow onClick={() => navigate(`/${currency.id}`)} hover>
      <TableCell component="th" scope="row" style={{ display: 'flex', gap: '2ch' }}>
        <Avatar src={currency.image} sx={{ width: 22, height: 22 }} />
        {currency.name}
      </TableCell>
      <TableCell>{currency.symbol}</TableCell>
      <TableCell>{currency.current_price}</TableCell>
      <TableCell>{currency.market_cap}</TableCell>
      <TableCell>{currency.oneHour}</TableCell>
      <TableCell>{currency.twentyFourHour}</TableCell>
      <TableCell>{currency.sevenDays}</TableCell>
    </TableRow>
  );
}

export default DataTableRow;
