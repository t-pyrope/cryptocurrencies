import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Avatar,
  Button,
  Grid, Paper, Table, TableBody, TableContainer, Typography,
} from '@mui/material';
import {
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import getCurrency from '../redux/actions/currency';
import { RootState } from '../redux/types';
import DetailTableRow from '../components/DetailTableRow';
import { formatWithoutCents } from '../helpers/currency';

function Currency() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currency } = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    const { id } = params;
    if (id) dispatch(getCurrency(id));
  }, [params.id]);

  return (
    <>
      <div>
        <Button onClick={() => navigate('/')} variant="contained" color="info">Go back to list</Button>
      </div>
      <Paper className="currency-page full-height">
        {currency
        && (
          <>
            <div className="one-line">
              <Avatar src={currency.image} sx={{ width: 50, height: 50 }} />
              <Typography variant="h2">{currency.name}</Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <DetailTableRow title="Symbol" text={currency.symbol} />
                      <DetailTableRow title="Genesis date" text={currency.genesisDate} />
                      <DetailTableRow title="Market rank" text={currency.marketRank} />
                      <DetailTableRow title="Total supply" text={currency.totalSupply} />
                      <DetailTableRow title="Circulating supply" text={currency.circulatingSupply} />
                      <DetailTableRow title="Market cap" text={currency.marketCap} />
                      <DetailTableRow title="Current price" text={currency.currentPrice} />
                      <DetailTableRow title="All time high" text={currency.allTimeHight} />
                      <DetailTableRow title="1h change" text={currency.oneHour} />
                      <DetailTableRow title="24h change" text={currency.twentyFourHour} />
                      <DetailTableRow title="7d change" text={currency.sevenDays} />
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={8}>
                <ResponsiveContainer height="100%" width="100%">
                  <LineChart data={currency.marketChart}>
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={((item) => formatWithoutCents(item))} />
                    <Tooltip formatter={(item: number) => formatWithoutCents(item)} />
                    <Line type="monotone" dataKey="usd" stroke="#eb4d4b" />
                  </LineChart>
                </ResponsiveContainer>
              </Grid>
            </Grid>
          </>
        )}
      </Paper>
    </>
  );
}

export default Currency;
