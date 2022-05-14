const person={
    firstName:'srinivas',
    lastName:'k',
    age:10,
    hobbies:['cricket','singing'],
    address:{
        state:'karnataka',
        pincode:573111,
        city:'chikkarasanahalli'
    }
}
// const firstName=person.firstname
// const lastName=person.lastname
// const age=person.age 

console.log('----------instead of doing this below is short----------');


//object destructuring (Es6 feature)

const {firstName,lastName}=person
console.log( 'first name',firstName);
console.log('last name',lastName);

//multiple level destructuring

// const {hobbies,address:{state,city}}
// console.log('hobbiess',hobbies);
// console.log('state',state);
// console.log('city',city);


// also due to non declare again we use to provide aliase name

const {firstName:fname,lastName:lname}=person
console.log( fname);
console.log( lastName);



function calculateTotalPrice({gst,price}) {
    console.log('gst',gst);
    console.log('price',price);
    return price+(price*(gst/100))
}
const product={
    price:100,
    gst:3,
    productName:'Bng',
    mfgYear:2021,
    moreDetails:{
        brand:'wildcraft',
        color:'blue'
    }
}
calculateTotalPrice(product)


console.log('--------------array destructuring-----------------');

const fruits=['applel','pine apple','orange','banana']

//const fruits=fruits[0]
// const fruits=fruits[1]     //instead of doing this 

// Array destructuring

const [fruits1,fruits2]=fruits
console.log( fruits1);
console.log( fruits2);