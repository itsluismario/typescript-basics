(()=>{
  let myNumber: number = undefined;
  let myString: string = null;

  let myNull = null;
  let myUndefined = undefined;

  let myAnotherNumber: number | null = null;
  myAnotherNumber = 12;

  let myAntherString: string | undefined = undefined;
  myAntherString = 'asd';

  // function hi2(name: string | null) {
  //   let hello = 'hello ';
  //   if(name){
  //     hello += name;
  //   } else {
  //     hello +='nobody';
  //   }
  //   console.log(hello);
  // }
  function hi(name: string | null) {
    let hello = 'hello ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }
  // }
  hi('luismario')
  hi(null)
})();
