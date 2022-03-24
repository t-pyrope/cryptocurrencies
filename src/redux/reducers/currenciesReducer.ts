import { AnyAction } from 'redux';
import { CurrencySimple } from '../actions/currency';
import { CurrenciesState, GET_CURRENCIES } from '../types';

const initState: CurrenciesState = {
  currencies: [],
};

// eslint-disable-next-line default-param-last
const currenciesReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENCIES: {
      const ids = state.currencies.map((currency) => currency.id);
      const filtered = action.payload.currencies.filter((c: CurrencySimple) => !ids.includes(c.id));
      return {
        ...state,
        currencies: [...state.currencies, ...filtered],
      };
    }
    default:
      return { ...state };
  }
};

export default currenciesReducer;
