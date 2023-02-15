(()=>{
  let useId: string | number;
  useId = 1234;
  useId = 'asd';

  function greeting(myText: string | number) {
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`numbers ${myText.toFixed(1)}`);
    }
  }
  greeting('asd');
  greeting(123.1123);
})();
