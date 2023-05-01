(() => {
  let prices = [1, 2, '3', true, 5, 6, 7];
  prices.unshift(100);
  prices.push(200);
  console.log(prices);

  let products: Object[] = ['hola', 2];
  products.push(true);
  products.push('as');
  products.push(true);
  products.push([]);
  products.push({});
  console.log('products', products);
  console.log(
    products.reduce((acumulate, value) => acumulate + '>' + value, '')
  );
})();
