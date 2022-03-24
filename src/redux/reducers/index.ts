import { combineReducers } from 'redux';
import currenciesReducer from './currenciesReducer';
import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  currency: currencyReducer,
});

export default rootReducer;
