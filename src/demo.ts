//npx tsc .\src\demo.ts --outDir dist --target es6

async () => {
  const myCart = [];
  const products: any[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
    toString: function () {
      return this.name + ' ' + this.lastName;
    },
  };
  const rta = person.toString() + limit;
  console.log(rta);
};
