class product{
    constructor(name,price){
        this.name=name;
        this.price=price;

    }

    displayproduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }
    caltotal(salestax){
        return this.price+(this.price*salestax)
    }
}
const salestax=0.05;

const product1= new product("shirt",34.44);
product1.displayproduct();
const total = product1.caltotal(salestax);
console.log(`total price with tax:${total}`);