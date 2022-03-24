import { AnyAction } from 'redux';
import { CurrencyState, GET_CURRENCY } from '../types';

const initState: CurrencyState = {
  currency: null,
};

// eslint-disable-next-line default-param-last
const currencyReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
      };
    default:
      return { ...state };
  }
};

export default currencyReducer;
