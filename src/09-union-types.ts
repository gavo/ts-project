(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(myText.toFixed(1));
    }
  }

  greeting('Nicolas');
  greeting(12.12);
})();
