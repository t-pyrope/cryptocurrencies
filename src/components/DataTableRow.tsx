import { Avatar, TableCell, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import getRate from '../helpers/currency';
import { CurrencySimple } from '../models/currency';

const currencyFormatter = require('currency-formatter');

interface DataTableRowProps {
    currency: CurrencySimple
}

function DataTableRow({ currency }: DataTableRowProps) {
  const [currentPrice, setCurrentPrice] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const [oneHour, setOneHour] = useState('');
  const [twentyFourHours, setTwentyFourHours] = useState('');
  const [sevenDays, setSevenDays] = useState('');

  useEffect(() => {
    const price = currencyFormatter.format(currency.current_price, { code: 'USD' });
    const cap = currencyFormatter.format(currency.market_cap, { code: 'USD' });
    const oneHourPercent = getRate(currency.current_price, currency.oneHour);
    const twentyFourHoursPercent = getRate(currency.current_price, currency.twentyFourHours);
    const sevenDaysPercent = getRate(currency.current_price, currency.sevenDays);
    setCurrentPrice(price);
    setOneHour(`${oneHourPercent}%`);
    setTwentyFourHours(`${twentyFourHoursPercent}%`);
    setSevenDays(`${sevenDaysPercent}%`);
    setMarketCap(cap);
  }, []);

  return (
    <TableRow>
      <TableCell component="th" scope="row" style={{ display: 'flex', gap: '2ch' }}>
        <Avatar src={currency.image} sx={{ width: 22, height: 22 }} />
        {currency.name}
      </TableCell>
      <TableCell>{currency.symbol}</TableCell>
      <TableCell>{currentPrice}</TableCell>
      <TableCell>{marketCap}</TableCell>
      <TableCell>{oneHour}</TableCell>
      <TableCell>{twentyFourHours}</TableCell>
      <TableCell>{sevenDays}</TableCell>
    </TableRow>
  );
}

export default DataTableRow;
