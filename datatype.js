console.log("----------------------------")
var a = 30;
console.log(a) //30
a = 40;
console.log(a); //40


let b = 100;
console.log(b); //100
a = b;
console.log(a); //100
console.log(b); //100

b = 200;
console.log(b); //200

const person = {
    fName: "mahesh",
    lName: 'chavan'

}
console.log(person.fName); //mahesh
const personCopy = person
console.log(personCopy);


personCopy.person = 'mahi';
console.log(personCopy); //mahi


console.log('----------------------;');

const val = 20
const val1 = 30
console.log(val === val1); //false

const car = {
    carBrand: 'jaguar',
    dtails: {
        peice: 234567
    }
}

const car1 = {
    carBrand: 'jaguar'
}
console.log(car === car1)
car1.dtails = car.dtails;
console.log(car1.dtails === car.dtails);

console.log('-----------------------------');


const mobile = {
    price: 9900,
    brand: 'mi'
}
const mobileCopyNew = {...mobile }
mobileCopyNew.price = 49999
console.log(mobileCopyNew.price);
console.log(mobile.price);
// console.log(mobile)

console.log('-------------');
mobile.brand = 'samsung';
console.log(mobile.brand);
console.log(mobileCopyNew.brand);
console.log('-------------------------');
const movie = {
    movieName: 'spiderman no way home',
    dirctor: 'johnceena',
    actor: "tiger",
    moreDetails: {
        budget: '20000$',
        heroin: 'olivia',
        vilain: 'Goblin'

    }

}
const movieCopy = {...movie,
    moreDetails: {...movie.moreDetails }
}
movie.dirctor = "mahesh babu"
console.log(movie.dirctor);
console.log(movieCopy.dirctor);

console.log('--------------');




movie.moreDetails.heroin = 'varshita'
console.log(movie.moreDetails.heroin);
console.log(movie.moreDetails.heroin);



console.log('-------------------------');


const bike = {
    price: 45000,
    brand: 'bajaj',
    bikeName: 'pluser',
    engineDetails: {
        cc: '24500cc',
        stroke: '4stroke'
    }
}

const bikeDeepCopy = JSON.parse(JSON.stringify(bike))
bike.engineDetails.cc = '350cc';
console.log(bike.engineDetails.cc);

console.log(bikeDeepCopy.engineDetails.cc);




console.log('----marge 2 objects---------');

const myObj = {
    firstName: 'mahivarsh'
}

const myOjb1 = {
    lastName: 'chavan'
}

const myObj2 = {
    ...myObj,
    ...myOjb1
}
console.log(myObj2);