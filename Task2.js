for (let index = 2; index <237; index++) {
  let isPrime = true;
  for (let j = 2; j<index; j++) {
    if(index%j===0){
      isPrime = false;
    }
  }
  if(isPrime){
    console.log(index);
  }
}