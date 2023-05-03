(() => {
  const calcTotal = (prices: number[]): string => {
    return prices.reduce((total, val) => total + val, 0).toString();
  };

  console.log(calcTotal([1, 2, 3, 4, 5, 6]));

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El Total es: ${rta}`);
  };

  printTotal([1, 2, 3, 4]);
})();
