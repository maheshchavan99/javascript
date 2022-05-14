let age = 0
console.log(age);

function validAgePromise() {

    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve('voting is eligible');
        } else {
            reject('not eligible for voting');
        }
    })

}

validAgePromise().then((secuss) => {
    console.log(secuss)
}).catch((error) => {
    console.log(error);
})

function agePromise() {
    age = document.getElementById('age').value
    validAgePromise().then((secuss) => {
        console.log(secuss)
    }).catch((error) => {
        console.log(error);
    })

}