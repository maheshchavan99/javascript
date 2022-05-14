// let age=17;
// let myAge=new Promise((resolve,reject)=>{
// if (age>=18) {
//     resolve('eligible for voting');

    
// }else{
//     reject('not eligible for voting')
// }
// }).then((data)=>{
// console.log('sucess',data)
// }).catch((err)=>{
//     console.log('faild',err)
// })
let x=5
const personAge=()=>{
    return new Promise((resolve,reject)=>{
        if (x===0) {
            resolve('X is equale to zero')
            
        }else{
            reject('X is not equale to zero')
        }

    })
   
}
personAge().then((data)=>{
    console.log('good',data)

}).catch((err)=>{
console.log('loss',err)
})
