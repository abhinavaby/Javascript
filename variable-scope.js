// variable scope = where a variable is recognized
//                  and accessible (local vs global)

function function1(){
    let x=1;
    console.log(x);
// variable inside function (local scope)
}

function function2(){
    let x=1;
    console.log(x);
// variable inside function (local scope)   
}

function1();
function2();



//variable declared outside the function (global scope)



let x=5;
function function3(){
    console.log(x);
}
function3();


//more presidence to local variable than global variable in a function
let y=3;
function function4(){
    let y=1;
    console.log(y);

}
function4();