(() => {
  let productTitle: string = 'My amazing product';
  console.log('productTitle', productTitle);
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "i'm busy tonight";
  console.log('productDescription', productDescription);

  const otherText = `This text contains line breaks
   and you can add variables such a:
   productTitle:  "${productTitle}"
   productDescription: "${productDescription}"`;
})();
