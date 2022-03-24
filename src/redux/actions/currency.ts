import axios from 'axios';
import { Dispatch } from 'redux';
import { DateTime } from 'luxon';

import { Chart, CurrencyExtended } from '../../models/currency';
import { currencyUrl, marketChartUrl } from '../../sources/crypto';
import { GET_CURRENCY } from '../types';

export interface CurrencySimple {
    current_price: number;
    id: string;
    image: string;
    market_cap: number;
    name: string;
    symbol: string;
    oneHour: number;
    twentyFourHours: number;
    sevenDays: number;
}

// export interface CurrencyExtended {
//     symbol: string;
//     genesisDate: Date; // genesis_date
//     marketRank: number;  // market_cap_rank
//     totalSupply: number; // market_data.total_supply
//     circulatingSupply: number; // market_data.circulating_supply
//     marketCap: number; // market_data.market_cap.usd
//     currentPrice: number; // market_data.current_price.usd
//     allTimeHight: number; // market_data.ath.usd
//     oneHour: number; // price_change_percentage_1h_in_currency.usd
//     twentyFourHours: number; // price_change_percentage_24h_in_currency.usd
//     sevenDays: number; // price_change_percentage_7d_in_currency.usd
//     marketChart: number[]
// }

// eslint-disable-next-line no-unused-vars
const getCurrency = (id: string) => async (dispatch: Dispatch) => {
  const currencyResult = await axios.get(currencyUrl(id));
  const marketChartResult = await axios.get(marketChartUrl(id));

  // [33, 33]
  const marketChart = marketChartResult.data.prices.reduce((prev: Chart[], current: number[]) => {
    const tempPrev = prev.slice();
    const chart: Chart = { name: '', usd: current[1] };
    const date = (prev.length && prev[prev.length - 1])
      ? DateTime.fromFormat(prev[prev.length - 1].name, 'LLL dd yyyy')
        .set({ day: DateTime.fromFormat(prev[prev.length - 1].name, 'LLL dd yyyy').day - 1 })
      : DateTime.now();
    const dateToName = date.toFormat('LLL dd yyyy');
    chart.name = dateToName;
    tempPrev.push(chart);
    return tempPrev;
  }, []);

  console.log(marketChart);

  const filteredData: CurrencyExtended = {
    name: currencyResult.data.name,
    image: currencyResult.data.image.small,
    symbol: currencyResult.data.symbol,
    genesisDate: currencyResult.data.genesis_date,
    marketRank: currencyResult.data.market_cap_rank,
    totalSupply: currencyResult.data.market_data.total_supply,
    circulatingSupply: currencyResult.data.market_data.circulating_supply,
    marketCap: currencyResult.data.market_data.market_cap.usd,
    currentPrice: currencyResult.data.market_data.current_price.usd,
    allTimeHight: currencyResult.data.market_data.ath.usd,
    oneHour: currencyResult.data.market_data.price_change_percentage_1h_in_currency.usd,
    twentyFourHours: currencyResult.data.market_data.price_change_percentage_24h_in_currency.usd,
    sevenDays: currencyResult.data.market_data.price_change_percentage_7d_in_currency.usd,
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
