// inheritance allows a class to inherit properties and methods from another class.

class Animal {
    alive=true;
    
    eat() {
        console.log(`The ${this.name} is eating.`);
    }
    sleep() {
        console.log(`The ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal {
    name = 'Rabbit'
    run() {
        console.log(`The ${this.name} is running.`);
    }   

}

class Fish extends Animal {
    name = 'Fish'
    swim() {
        console.log(`The ${this.name} is swimming.`);
    }
}

class Hawk extends Animal {
    name = 'Hawk'
    fly() {
        console.log(`The ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
console.log(rabbit.alive); // true
rabbit.eat(); // The Rabbit is eating.
rabbit.sleep(); // The Rabbit is sleeping.
rabbit.run(); // The Rabbit is running.

const fish = new Fish();
console.log(fish.alive); // true
fish.eat(); // The Fish is eating.
fish.sleep(); // The Fish is sleeping.
fish.swim(); // The Fish is swimming.

const hawk = new Hawk();
console.log(hawk.alive); // true
hawk.eat(); // The Hawk is eating.
hawk.sleep(); // The Hawk is sleeping.
hawk.fly(); // The Hawk is flying.
