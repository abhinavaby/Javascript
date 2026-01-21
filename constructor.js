function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.dirve= function(){console.log(`you drivr ${this.make}`)}
}

// Use the 'new' keyword to create instances
const car1 = new Car("ford", "mustang", 2024, "green");
const car2 = new Car("aee", "toyota", 2003, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car1.dirve();
