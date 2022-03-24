import { CurrencyExtended, CurrencySimple } from '../models/currency';

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const CURRENCIES_LOADING = 'CURRENCIES_LOADING';
export const GET_CURRENCY = 'GET_CURRENCY';
export const CURRENCY_LOADING = 'CURRENCY_LOADING';

export type CurrenciesState = {
    currencies: CurrencySimple[],
    isLoading: boolean,
}

export type CurrencyState = {
    currency: CurrencyExtended | null;
}

export interface RootState {
    currencies: CurrenciesState;
    currency: CurrencyState;
}
