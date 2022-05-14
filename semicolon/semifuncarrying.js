// console.log('start')         //semicolon is mandatory otherwise it may think it is an function curryung
// (10===10?console.log( 'equal'):console.log( 'not equal'));

//semicolon is mandatory before () if we are writing () next line after executing any function
console.log('start');
(10===10?console.log( 'equal'):console.log( 'not equal'));

console.log('ended');
console.log('--------------------------');

function test( ) {
    function inner( ) {
        console.log( 'inner function');
    }
    return inner
}
const val = test()
console.log( val());
console.log('--------------------------');

test()() ;   //function currying
// console.log('--------------------------');
(function(){
    console.log( 'haii');
})()










