import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Grid, Paper, Table, TableBody, TableContainer, Typography,
} from '@mui/material';
import getCurrency from '../redux/actions/currency';
import { RootState } from '../redux/types';
import DetailTableRow from '../components/DetailTableRow';

function Currency() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currency } = useSelector((state: RootState) => state.currency);

  console.log(currency);

  useEffect(() => {
    const { id } = params;
    if (id) dispatch(getCurrency(id));
  }, [params.id]);

  return (
    <>
      <Button onClick={() => navigate('/')}>Go back to list</Button>
      <Paper>
        {currency
        && (
        <Grid container>
          <Grid item xs={5}>
            <Typography variant="h2">{currency.name}</Typography>
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
                  <DetailTableRow title="24h change" text={currency.twentyFourHours} />
                  <DetailTableRow title="7d change" text={currency.sevenDays} />
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={7}>hello</Grid>
        </Grid>
        )}
      </Paper>
    </>
  );
}

export default Currency;
