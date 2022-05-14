console.log('started');
new Promise(function(resole, reject) {
    if (10 > 5) {
        resole('success');
    } else {
        reject('erorr');
    }
}).then(function(data) {
    console.log(data);
}).catch(function(erorr) {
    console.log(erorr);
})
console.log('ended');
// console.log('===============if condition is false execute catch==========')


// new Promise(function(resole, reject) {
//     if (10 < 5) {
//         resole('success');
//     } else {
//         reject('erorr');
//     }
// }).then(function(data) {
//     console.log(data);
// }).catch(function(erorr) {
//     console.log(erorr);
// })
let age = 18;
const validAgePromises = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve('voting is eligible');
    } else {
        reject('not eligible for voting');
    }
}).then((secuss) => {
    console.log(secuss);
}).catch((error) => {
    console.log(error)
})