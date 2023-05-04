import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  return products.reduce((sum, val) => sum + val.stock, 0);
};
