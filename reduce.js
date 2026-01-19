//.reduce()=reduuce the element of the elements of an array to a single value
const prices=[1,34,23,56,43,23,2];
const sum=prices.reduce(add);
console.log(`price=${sum}`);
const max=prices.reduce(maxi);
console.log(`maximum value = ${max}`);

function add(accumulator,element){
    return accumulator+element;
}
function maxi(accumulator,element){
    return Math.max(accumulator,element);
}
