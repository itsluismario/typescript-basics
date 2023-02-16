import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'P1',
  createAt: new Date(1997, 7, 26),
  stock: 12
});

addProduct({
  title: 'P2',
  createAt: new Date(1997, 11, 11),
  stock: 6
});

console.log(products);

const total = calcStock();
console.log(total);
