import axios from 'axios';
import { Dispatch } from 'redux';

import { Currency, CurrencySimple } from '../../models/currency';
import { currencyListUrl } from '../../sources/crypto';
import { GET_CURRENCIES } from '../types';

const getCurrencies = (page: number) => async (dispatch: Dispatch) => {
  const result = await axios.get(currencyListUrl(page));

  const filteredData: CurrencySimple[] = result.data.map((item: Currency) => ({
    name: item.name,
    current_price: item.current_price,
    id: item.id,
    image: item.image,
    market_cap: item.market_cap,
    symbol: item.symbol,
    oneHour: item.sparkline_in_7d.price[1],
    twentyFourHours: item.sparkline_in_7d.price[24],
    sevenDays: item.sparkline_in_7d.price[167],
  }));
  dispatch({
    type: GET_CURRENCIES,
    payload: {
      currencies: filteredData,
    },
  });
};

export default getCurrencies;
