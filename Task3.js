const num =[12,4,0,0,9,0,7,0,6];
const zeroCount = num.filter((n)=> n===0).length
console.log(zeroCount);

const zeroCount2 = num.filter((e) => !Boolean(e)).length;
