// callback is a function that is passed as an argument to another function;
// a callback assurers which function has to come next

function hi(my){
    console.log("hi");
    my(hello);//callback

}

function hello(){
    console.log("hello");
}


function my(hello){
    console.log(" my name is Abhinav");
    hello();//callback
}

hi(my);


//sum of two numbers
console.log(" ")


function sum(callback,x,y){
    let result=x+y;
    callback(result);
}

function display(result){
    document.getElementById("result").textContent=`the sum is ${result}`;
}
sum(display,3,4);






