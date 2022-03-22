import { CurrencySimple } from '../models/currency';

export const GET_CURRENCIES = 'GET_CURRENCIES';

export type CurrenciesState = {
    currencies: CurrencySimple[]
}

export interface RootState {
    currencies: CurrenciesState
}
