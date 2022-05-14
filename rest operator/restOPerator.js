console.log('--------rest oprator--------');
function add(n1,n2) {
    return n1+n2
}
function addThree( n1,n2,n3) {
    return n1+n2+n3
}
function addFour( n1,n2,n3,n4) {
    return n1+n2+n3+n4
}

add(10,30)
addThree(10,20,30)
addFour(10,20,30,40)

console.log('----instead of doing this we use rest operator-----------');

//rest operator

// rest operator should always be the last parameter
// or rest operator should be one and only parameter
//(a,b,...rest) //valid
//(...rest )    //valid
//(...rest,a,b)//invalid  (a and b variables willl never get any value)
// (a,...rest,b) //invalid


function addAll(...nums ) {
    console.log(nums);
    let total=0
    for(i=0;i<=nums.length;i++){
        total+=nums[i]
    }
    console.log('total',total);
}
addAll(20,30)
addAll(20,30,40)
addAll(20,30,40,50)
addAll(20,30,40,50,60)




//invalid

// function addAllvalue(...rest,a) {
//     console.log(a);
// }

function addAllvalue( a,b,...rest) {
    console.log( a,b,...rest);
}
addAllvalue(20,30,30)

