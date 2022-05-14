//construcor function

function Car( cname,year) {
    this.Car=cname
    this.year=year
    console.log( this);
    this.getCardetails=function(){
        return`${this.cname} manufactured year is ${this.year}`
    }
}
const car1=new Car('BMW',2021)
console.log( car1.getCardetails());
