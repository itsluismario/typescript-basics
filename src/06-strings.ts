(()=>{
  let productTitle = 'My amazing product';
  //productTitle = () => {};
  ///productTitle = null
  console.log('productTitle', productTitle);

  let productPrice = 'Price product';
  console.log('productPrice',productPrice);

  const summary = `
    title: ${productTitle}
    description: ${productPrice}
  `;
  console.log('summary', summary);
})();
