(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const createProductJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  };

  const product =  createProductJsonV2('P1',new Date(),4);
  console.log(product);
  console.log(product.stock);

})();
