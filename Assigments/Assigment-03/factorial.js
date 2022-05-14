function factorial(num) {
    if (num === 0 || num === 1) {
        return num;
    }
    return num * factorial(num - 1);
}
let n = factorial(8);
console.log(n);

console.log('-----------anonymous------------');

var fatVal = function(num) {
    if (num === 0 || num === 1) {
        console.log(num);
    }
    return num * factorial(num - 1);
}
var result = fatVal(4);
console.log(result);

console.log('---------------arrow------------------');
var fat = num => {
    if (num === 0 || num === 1) {
        return num;
    }
    return num * fat(num - 1);
}
var factorialVal = fat(4);
console.log(factorialVal);



console.log('------isfe----');


// (function(num) {
//     var fat = 1
//     if (num === 0 || num === 1) {
//         console.log(num);
//     }
//     return num * fat(num - 1);

// })(5);