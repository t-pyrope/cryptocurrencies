import { CurrencyExtended, CurrencySimple } from '../models/currency';

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCY = 'GET_CURRENCY';

export type CurrenciesState = {
    currencies: CurrencySimple[]
}

export type CurrencyState = {
    currency: CurrencyExtended | null;
}

export interface RootState {
    currencies: CurrenciesState;
    currency: CurrencyState;
}
