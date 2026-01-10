console.log(`PI is ${Math.PI}`,typeof Math.PI)




let a=1.55;
let b=3.99;
let c=2.1;
let d=3.4444;
let q,w,e,r;
q=Math.round(a);
w=Math.ceil(b);
e=Math.floor(c);
r=Math.trunc(d);
console.log(q,w,e,r);
console.log(Math.pow(2,4));
console.log(Math.sqrt(81));
console.log(Math.abs(-32));
console.log(Math.sign(-22));
console.log(Math.max(q,w,e,r));



// random number between 1,5 both included;
// if removed -min fro max-min then it will generate random number between 1,6
const min=1;
const max=6;
document.getElementById("roll").onclick=function(){
    
    let random=Math.floor(Math.random()*(max-min))+min;
    document.getElementById("number").textContent=random
}


