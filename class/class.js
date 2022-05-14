class car{
    constructor(cName,year){
        this.cName=cName
        this.year=year
    }
    getCarDetails(){     //function in js new features ES6
        return`${this.cName}is manufacture in ${this.year}`;
    }
}
const car1=new car('BMW', 2021);
console.log(car1.getCarDetails());

const car2=new car('jaguar', 2021);
console.log( car2.getCarDetails());