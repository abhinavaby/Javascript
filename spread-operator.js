//... allows an
//iterable such as an
//array or string to be expanded into seperate elements (unpacks the elements)



let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(... numbers);
console.log(maximum);
let min=Math.min(...numbers);
console.log(min);



console.log("");
console.log("");
console.log("");



let name="abhinav";
let Name=[...name];
let _name=[...name].join("-");
console.log(Name) ;
console.log(_name);

console.log("");
console.log("");
console.log("");

let a=["a","b","c"];
let b=[...a];
let c=[...a,...b];
console.log(c);
