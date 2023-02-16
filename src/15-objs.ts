(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'P1',
    createAt: new Date(1997, 7, 26),
    stock: 12
  });


  products.push({
    title: 'P2',
    createAt: new Date(26,11,11),
    stock: 11,
    size: 'M'
  });
  console.log(products);
})();
