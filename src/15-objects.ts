(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Pr1',
    createAt: new Date(1993, 1, 1),
    stock: 12,
  });

  addProduct({
    size: 'XL',
    title: 'Pr2',
    createAt: new Date(1993, 1, 1),
    stock: 12,
  });
  console.log(products);
})();
