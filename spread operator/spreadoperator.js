const person={
    firstname:'srinivas',
    lastname:'c r'
}
// spread operator
// copy properties of oone object/array to another
// combine /merge two or more objects or 2 or more array
// add new properties and take copy
// change any property and take copy
const personCopy={...person}
const address={
    pincode:573111,
    state:'karnaataka',
    city:'chikkarasanahalli'
}
const personDetails={...person,...address}
console.log( personDetails);
const personCop={...person,age:14}
console.log( personCop);
const personD={...person,lastname:'ramesh'}
console.log( personD);

