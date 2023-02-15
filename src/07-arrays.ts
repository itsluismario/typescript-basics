(()=>{
  let prices = [1,1,1,1,1,'hola',true];
  // prices.push('asas');
  // prices.push(true);
  // //prices.push({}); objeto
  prices.push(123);

  let product = ['hola',true];
  product.push(false);

  const mixed: (number | string | boolean | object )[] = ['hola', true];
  mixed.push(123);
  product.push(false);
  product.push('false');
  mixed.push({});
  mixed.push([]);

  let number = [1,2,3,4,5];
  number.map(item => item*2);

})();
