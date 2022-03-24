const baseUrl = 'https://api.coingecko.com/api/v3';

export const currencyListUrl = (page: number) => `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=true`;

export const currencyUrl = (id: string) => `${baseUrl}/coins/${id}`;

export const marketChartUrl = (id: string) => `${baseUrl}/coins/${id}/market_chart?vs_currency=usd&days=365'`;
