const currencyFormatter = require('currency-formatter');

export function getRate(prev: number, current: number): string {
  return (((
    (current * 100) / (prev)) * 100) / 100 - 100).toFixed(2);
}

export function formatWithoutCents(usd: number) {
  return currencyFormatter.format(usd, { code: 'USD' }).slice(0, -3);
}
