import { AnyAction } from 'redux';
import { CurrencySimple } from '../actions/currency';
import { CurrenciesState, CURRENCIES_LOADING, GET_CURRENCIES } from '../types';

const initState: CurrenciesState = {
  currencies: [],
  isLoading: false,
};

// eslint-disable-next-line default-param-last
const currenciesReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENCIES: {
      const ids = state.currencies.map((currency) => currency.id);
      const filtered = action.payload.currencies.filter((c: CurrencySimple) => !ids.includes(c.id));
      return {
        ...state,
        isLoading: false,
        currencies: [...state.currencies, ...filtered],
      };
    }
    case CURRENCIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state, isLoading: false };
  }
};

export default currenciesReducer;
