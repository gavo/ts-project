(() => {
  //let myNumber: number = undefined;
  //let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = 'MyText';

  function hi(name: string | null) {
    let hello = `Hola ${name || 'nobody'}`;
    console.log(hello);
  }

  hi('Amix');
  hi(null);
})();
