import React, { useEffect } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencySimple } from '../models/currency';
import getCurrencies from '../redux/actions/currencies';
import { RootState } from '../redux/types';
import DataTableRow from '../components/DataTableRow';

function HomePage() {
  const dispatch = useDispatch();
  const { currencies } = useSelector((store: RootState) => store.currencies);
  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  return (
    <div>
      <Typography variant="h1" component="h1">Cryptocurrencies</Typography>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Current price</TableCell>
              <TableCell>Market cap</TableCell>
              <TableCell>1h</TableCell>
              <TableCell>24h</TableCell>
              <TableCell>7d</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {currencies.map((currency: CurrencySimple) => (
              <DataTableRow key={currency.name} currency={currency} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HomePage;
