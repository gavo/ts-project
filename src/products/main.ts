import { addProduct, calcStock, products } from './product.service';

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

console.log(calcStock());
console.log(products);
