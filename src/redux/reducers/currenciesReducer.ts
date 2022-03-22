import { AnyAction } from 'redux';
import { CurrenciesState, GET_CURRENCIES } from '../types';

const initState: CurrenciesState = {
  currencies: [],
};

// eslint-disable-next-line default-param-last
const currenciesReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload.currencies,
      };
    default:
      return { ...state };
  }
};

export default currenciesReducer;
