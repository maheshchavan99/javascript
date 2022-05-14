console.log('a-', a);
var a = 20;
var b = 30;
console.log('outside  fuction-', b);

function test() {

    //variable hosting inside the function
    //the local variable given to the first preference
    //if the variable is not declearlocally js engine will 
    // seach variablr to the gloable variable
    console.log('b inside the function', b);
    console.log('a inside the fuction', a);
}
test()


console.log('=====================');


add(20, 40)

function add(a, b) {
    console.log(a + b);
}


// greet(3, 5) greet is not function


var greet = function(a, b) {
    console.log(a + b);


}
greet(89, 90)
    // free(6, 8)free is not a 


var free = (a, b) => {
    console.log(a + b);
}
free(98, 87)