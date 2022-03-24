/* eslint-disable camelcase */
import axios from 'axios';
import { Dispatch } from 'redux';
import { DateTime } from 'luxon';

import { Chart, CurrencyExtended } from '../../models/currency';
import { currencyUrl, marketChartUrl } from '../../sources/crypto';
import { GET_CURRENCY } from '../types';

const currencyFormatter = require('currency-formatter');

export interface CurrencySimple {
    current_price: number;
    id: string;
    image: string;
    market_cap: number;
    name: string;
    symbol: string;
    oneHour: number;
    twentyFourHour: number;
    sevenDays: number;
}

// eslint-disable-next-line no-unused-vars
const getCurrency = (id: string) => async (dispatch: Dispatch) => {
  const currencyResult = await axios.get(currencyUrl(id));
  const marketChartResult = await axios.get(marketChartUrl(id));

  const marketChart = marketChartResult.data.prices.reduce((prev: Chart[], current: number[]) => {
    const tempPrev = prev.slice();
    const chart: Chart = { name: '', usd: Math.floor(current[1] * 100) / 100 };
    const date = (prev.length && prev[prev.length - 1])
      ? DateTime.fromFormat(prev[prev.length - 1].name, 'LLL dd yyyy')
        .set({ day: DateTime.fromFormat(prev[prev.length - 1].name, 'LLL dd yyyy').day - 1 })
      : DateTime.now();
    const dateToName = date.toFormat('LLL dd yyyy');
    chart.name = dateToName;
    tempPrev.push(chart);
    return tempPrev;
  }, []);
  const { data: { market_data } } = currencyResult;

  const filteredData: CurrencyExtended = {
    name: currencyResult.data.name,
    image: currencyResult.data.image.small,
    symbol: currencyResult.data.symbol,
    genesisDate: currencyResult.data.genesis_date,
    marketRank: currencyResult.data.market_cap_rank,
    totalSupply: currencyResult.data.market_data.total_supply,
    circulatingSupply: currencyResult.data.market_data.circulating_supply,
    marketCap: currencyFormatter.format(currencyResult.data.market_data.market_cap.usd, { code: 'USD' }),
    currentPrice: currencyFormatter.format(currencyResult.data.market_data.current_price.usd, { code: 'USD' }),
    allTimeHight: currencyFormatter.format(currencyResult.data.market_data.ath.usd, { code: 'USD' }),
    oneHour: Math.floor(market_data.price_change_percentage_1h_in_currency.usd * 100) / 100,
    twentyFourHour: Math.floor(market_data.price_change_percentage_24h_in_currency.usd * 100) / 100,
    sevenDays: Math.floor(market_data.price_change_percentage_7d_in_currency.usd * 100) / 100,
    marketChart,
  };
  dispatch({
    type: GET_CURRENCY,
    payload: {
      currency: filteredData,
    },
  });
};

export default getCurrency;
