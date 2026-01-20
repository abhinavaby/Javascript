// arrow function = a concise way to write function expression good for simple functions that you use only once 
const numbers=[1,2,3,4,5,6];
const squares=numbers.map((element)=>Math.pow(element,2));
console.log(squares);
const largest=numbers.reduce((previous,current)=>Math.max(previous,current));
console.log(largest);