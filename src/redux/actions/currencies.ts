import axios from 'axios';
import { Dispatch } from 'redux';
import { getRate } from '../../helpers/currency';

import { Currency, CurrencySimple } from '../../models/currency';
import { currencyListUrl } from '../../sources/crypto';
import { CURRENCIES_LOADING, GET_CURRENCIES } from '../types';

const currencyFormatter = require('currency-formatter');

const getCurrencies = (page: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: CURRENCIES_LOADING,
  });
  const result = await axios.get(currencyListUrl(page));

  const filteredData: CurrencySimple[] = result.data.map((item: Currency) => ({
    name: item.name,
    current_price: currencyFormatter.format(item.current_price, { code: 'USD' }),
    id: item.id,
    image: item.image,
    market_cap: currencyFormatter.format(item.market_cap, { code: 'USD' }),
    symbol: item.symbol,
    oneHour: getRate(item.current_price, item.sparkline_in_7d.price[0]),
    twentyFourHour: getRate(item.current_price, item.sparkline_in_7d.price[23]),
    sevenDays: getRate(item.current_price, item.sparkline_in_7d.price[166]),
  }));
  dispatch({
    type: GET_CURRENCIES,
    payload: {
      currencies: filteredData,
    },
  });
};

export default getCurrencies;
