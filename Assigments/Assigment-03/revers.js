function reversString(str) {
    return str.split('').reverse('').join('');
}
console.log(reversString('mahesh chavan'));

console.log('------------anonymous--------------');

var reverString = function(str) {
    return str.split('').reverse('').join('');
}
var result = (reversString('praveenharshanaveen'));
console.log(result);


console.log('------------arrow--------------');

var rever = str => {
    return str.split('').reverse('').join('');
}
console.log(rever('ayushrathod'));


console.log('----ISFE-----');
(function(name) {
    console.log(name.split('').reverse('').join(''));
})('varshita')