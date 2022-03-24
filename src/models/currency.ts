interface Roi {
    currency: string;
    percentage: number;
    times: number;
}

interface Sparkline {
    price: number[];
}

export interface Currency {
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    circulating_supply: number;
    current_price: number;
    fully_diluted_valuation: number;
    high_24h: number;
    id: string;
    image: string;
    last_updated: Date;
    low_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    max_supply: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi: Roi | null;
    symbol: string;
    total_supply: number;
    total_volume: number;
    sparkline_in_7d: Sparkline;
}

export interface CurrencySimple {
    current_price: number;
    id: string;
    image: string;
    market_cap: number;
    name: string;
    symbol: string;
    oneHour: number;
    twentyFourHours: number;
    sevenDays: number;
}

export interface Chart {
    name: string,
    usd: number,
}

export interface CurrencyExtended {
    name: string;
    symbol: string;
    image: string;
    genesisDate: Date;
    marketRank: number;
    totalSupply: number;
    circulatingSupply: number;
    marketCap: number;
    currentPrice: number;
    allTimeHight: number;
    oneHour: number;
    twentyFourHours: number;
    sevenDays: number;
    marketChart: Chart[]
}

export interface Currencies {
    currencies: Currency[];
}
