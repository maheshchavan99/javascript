 const myPromise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve([100, 200, 300, 400]);
     }, 2000)
 })

 const myPromise2 = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve([1000, 2000, 3000, 4000]);
         //  reject('erorr');
     }, 5000)
 })



 //if all the promise are resolve function 
 // will be executed and it eill combiner the 
 //resolve data in to array
 // if any promise id reject also catvh fuction will executed

 Promise.all([myPromise1, myPromise2]).then((data) => {
     console.log('data', data)
 }).catch((erorr) => {
     console.log('erorr', erorr)
 })