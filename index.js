console.log(`hello world`);
console.log(`My name is Abhinav`);
window.alert(`Welcome to my page`);
//this is a comment
/*this is
a 
multi-line
comment*/
document.getElementById("h1").textContent = "This is Abhinav's page";
document.getElementById("p").textContent = "My name is Abhinav";
   



let x=20;
let y=30;
let z=x+y;
console.log(z);



let price=10.33;
let cgpa=9.5;
console.log(`the price is ${price} and your cgpa is ${cgpa}`);
console.log(typeof price);
console.log(typeof cgpa);


let name="Abhinav";
console.log(`My name is ${name}`);
console.log(typeof name);



let online=true;
let offline=false;
console.log(`The online status is ${online} and offline status is ${offline}`);
console.log(typeof online);
console.log(typeof offline);







let fullname="abhinav Aby"
let age=20;
let isStudent=true;
document.getElementById("p1").textContent=`full name is ${fullname}`;
document.getElementById("p2").textContent=`age is ${age}`;
document.getElementById("p3").textContent=`student status is ${isStudent}`;





let students=30;
students=students+1;
students=students-5;
students=students*2;
students=students/3;
students++;
students--;
console.log(`The number of students is ${students}`);
document.getElementById("p4").textContent=`The number of students is ${students}`;




let username;
username=window.prompt("Enter your name");
window.alert(`Welcome ${username} to my page`);



let namee;
document.getElementById("submit").onclick=function(){
    namee=document.getElementById("name").value;
    window.alert(`Hello ${namee}, welcome to my page`);
    document.getElementById("wel").textContent=`welcome ${namee}`;
    console.log(`welcome ${namee}`);
}


