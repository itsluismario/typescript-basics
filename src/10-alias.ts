(()=>{
  type UserID = string | number ;
  let useId: UserID;

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 's';
  shirtSize = 'M';
  shirtSize = 'asdwq'

  function greeting(useId: UserID, size: Sizes) {
    if(typeof useId === 'string'){
      console.log(`string ${useId.toLowerCase()} ${size}`);
    }
  }
  greeting(111,'S');

})();
