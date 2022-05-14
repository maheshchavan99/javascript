console.log('------map method------');

const array = [200, 300, 400, 500, 600]
let newArray = array.map((val) => {
    return val + 200;


})
console.log(array);
console.log(newArray);

console.log('------------------filter method--------------');

const num = [45, 56, 78, 90, 34, 2, 5, 7, 9];
let numCopy = num.filter((val) => {
    return val > 50;

})
console.log(num);
console.log(numCopy);


console.log('----join method---');

const names = ['mahesh', 'varshita', 'chavan', 'mahivarsha']
let newName = names.join(",")
console.log(names);
console.log(newName);


console.log('------reduce method----');

const reduceMethod = [23, 45, 67, 89, 87, 54]
let copyReduce = reduceMethod.reduce((inti, index, arr) => {
    return inti - index;
})
console.log(reduceMethod);
console.log(copyReduce);


console.log('--------geolocation------------');
let callbackfun = (position) => {
    console.log(position)
}

let callback = (error) => {
    console.log(error)
}
navigator.geolocation.getCurrentPosition(callbackfun, callback);