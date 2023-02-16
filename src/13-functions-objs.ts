(()=>{
  const login = (data: {email: string, password: number} ) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'itsluismario@gmail.com',
    password: 12323
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'P1',
    createAt: new Date(1997, 7, 26),
    stock: 12
  });
  console.log(products);

})();
