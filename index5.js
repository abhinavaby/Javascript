let age=window.prompt("enter your age");
if(age>=18){
    window.alert("you are eligible for voting");


}
else if(age<0){
    window.alert("age cant be less than zero");
}
else{
    window.alert("you are under age for voting");
}





let student=0;
if(student){
    console.log("student");
}
else{
    console.log("not student");
}







document.getElementById("submit").onclick=function(){
    if(document.getElementById("age").value>=18){
        document.getElementById("output").textContent="you are old enought to vote"

    }
    else if(document.getElementById("age").value<=0){
        document.getElementById("output").textContent="age cant be less than or equal to zero"

    }
    else{
        document.getElementById("output").textContent="you cant vote"

    }
}