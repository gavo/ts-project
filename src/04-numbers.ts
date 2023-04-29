(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('Is greater');
  }
  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('Apply');
  } else {
    console.log('Not Apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b110011;
  console.log('bin', bin);
  let number: number = 10; //No declarar con Number sino con number
  console.log(number);
})();
