const person = {
    name:"abhinav",
    favfood:"apple",
    sayhello:()=>console.log(`hi i am ${person.name}`),
    eat:function(){console.log(`my food is ${this.favfood}`)}
    
}
person.sayhello();//this doesnot work with arrow function
person.eat();