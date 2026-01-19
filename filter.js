//.filter()=creates a new array by filtering out elements
let numbers=[1,2,3,4,5,6,7,8];
let numb=numbers.filter(even);
console.log(numb);



function even(element){
    if(element%2===0){
        return element;
    }
}

//same but most prefered

//function even(element){
//   return element%2===0;
        
//}




let age=[12,13,14,15,16,17,18,19,20];
let real_age=age.filter(age1);
console.log(real_age);

function age1(element){
    return element>=18;
}


