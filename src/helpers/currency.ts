function getRate(prev: number, current: number): string {
  return (((
    (current * 100) / (prev)) * 100) / 100 - 100).toFixed(2);
}

export default getRate;
