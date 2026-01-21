class MAthutil{
    static PI =3.14;
    static  getdiameter(radius){
        return 2*radius
    }
    static getarea(radius){
        return this.PI*radius*radius;

    }
}
console.log(MAthutil.PI);
const a=MAthutil.getdiameter(3);
console.log(a);
const b =MAthutil.getarea(2);
console.log(b);