let age= window.prompt("how old are you: ");
age=age+1;
console.log(age);
let age2= window.prompt("how old are you: ");
age2=Number(age2);
age2+=1;
console.log(`your age after one year is:${age2} ` ,typeof age2);   





let x="abhinav";
let y="abhinav";
let z="abhinav";
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);






let x1="";
let y1="";
let z1="";
x1=Number(x1);
y1=String(y1);
z1=Boolean(z1);
console.log(x1,typeof x1);
console.log(y1,typeof y1);
console.log(z1,typeof z1);








const PI=3.14
let radius;
let circumference;
radius=window.prompt("enter the radius");
radius= Number(radius)
circumference=2*PI*radius;
console.log(`circumference is${circumference}`);






 
 
 document.getElementById("sub").onclick=function(){
   
    const Pi=3.14;
 
    let rad=document.getElementById("rad").value;
    rad=Number(rad)
    let circum=2*Pi*rad;
    document.getElementById("ans").textContent=`circumferenc is ${circum}`
 }