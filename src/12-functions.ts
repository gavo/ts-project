(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'S');
  console.log(product1);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const product2 = createProductToJsonV2('product2', new Date(), 12);
  console.log(product2);
})();
