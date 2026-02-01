// super keyword refers to the parent class
// It is used to call the constructor of the parent class and to access its methods
// from the child class.

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
}
}


class Rabbit extends Animal {
    constructor(name,age,swimSpeed) {
        super(name, age);
        
        this.swimSpeed = swimSpeed;
    }
}
class Fish extends Animal {
    constructor(name,age,flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
class Hawk extends Animal {
    constructor(name,age,runSpeed) {
        super(name, age);
        
        this.runSpeed = runSpeed;
    }
}

const rabbit = new Rabbit('Rabbit',2,10);
const fish = new Fish('Fish',1,20);
const hawk = new Hawk('Hawk',3,30);

console.log(rabbit.name); // Rabbit
console.log(rabbit.age); // 2
console.log(rabbit.swimSpeed); // 10

console.log(fish.name); // Fish
console.log(fish.age); // 1
console.log(fish.flySpeed); // 20

console.log(hawk.name); // Hawk
console.log(hawk.age); // 3
console.log(hawk.runSpeed); // 30