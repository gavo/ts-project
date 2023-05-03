(() => {
  type UserID = string | number;

  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = 'XL';

  function greeting(myText: UserID, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  greeting(1123, 'XL');
})();
