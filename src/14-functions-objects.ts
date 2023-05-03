(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'gvmgust@gmail.com',
    password: 1232,
  });

  const products: any[] = [];
  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
