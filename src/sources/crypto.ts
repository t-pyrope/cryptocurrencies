const baseUrl = 'https://api.coingecko.com/api/v3';

const currencyListUrl = (page: number) => `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=true`;

export default currencyListUrl;
