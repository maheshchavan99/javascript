const hobbies = ['sleeping', 'playing', 'coding', 'traveling', 'trekking'];
console.log('-----------------------pop------------------------');
console.log('hobbies after push', hobbies);

const hobbiesLenght = hobbies.push('dancing');
console.log('hobbies lenght', hobbiesLenght);
console.log('new hobbies add', hobbies.push('gym'));

console.log('---------pop---');
const deletedElement = hobbies.pop();
console.log('delete element----', deletedElement);

console.log('--------shift or unshift-------------------------');
const arr = hobbies.unshift('mahivarsh')
console.log('shit elemnen', arr);
console.log(hobbies);

console.log('-------------------------');
const arr1 = hobbies.shift();
console.log(arr1)
console.log(hobbies);
console.log('--------------------------------');
const arrayIs = Array.isArray(hobbies);
console.log("is array ", arrayIs);



const isInclude = hobbies.includes("sleeping");
console.log('include --', isInclude);

const index = hobbies.indexOf('coding', 4);
// console.log('index--', index);
console.log('index is--', index, 2)



//1. parameters
// 2.what is return
// 3.add the element afterlast index

console.log('-----------------for each-----------------');
hobbies.forEach(function(val, index, arr) {
    console.log(`${val}-${index}`);
});



console.log('----------splice-----------');
const numbers = [10, 20, 30, 40, 50]
const deleted = numbers.splice(2, 2, 79, 68, 97)
console.log('deleted elements', deleted);
console.log(numbers);

console.log('--------without delete---element--------');
const deletedEle = numbers.splice(1, 0, 79, 68, 97)
console.log(deletedEle);
console.log(numbers);


console.log('-----slcie----');

const number1 = [40, 90, 56, 98, 45, 79, ]
const deletedArr = number1.slice(0, 4)
console.log(deletedArr);
console.log(number1);

console.log('----------changing --n will be also n1-----');
const n = [10, 20, 45]
const n1 = n;
n[0] = 90;
console.log(n[0]);
console.log(n[0]);




console.log('=================================');

const movie = ['spiderman', "superman", 'ironman', 'antman']
const movieCopy = [...movie]
movie[0] = 'powerman'
console.log(movieCopy[1]);
console.log(movie[0]);

console.log('--------------map method------');
const arr13 = [100, 200, 300, 400, 500];
const copyArr = arr13.map((val, indx, arr) => {
    return val + 10;
})
console.log(arr13);
console.log(copyArr);


// console.log('--------using for loop---------------');
// const newArr=[200,300,400,500]
// const copyNewArr=[]
// for (let i = 0; i< newArr.length; i++) {

//     copyNewArr.push(newArr[i]+10);
// }
// console.log(newArr);
// console.log(copyNewArr);


console.log('-------------filter method-----------------');

// const arrs=[45,56,9,89,10,5]

// const filtered=arrs.filter((val)=>{
//     if(val>=18){
//         return true;

//     }else{
//         return false;
//     }
// })
// console.log(arrs);
// console.log(filtered);
console.log('-------filter method-----------');
const ageArrs = [45, 56, 9, 89, 10, 5]

const filtered = ageArrs.filter((val) => {
    return val >= 18;
})
console.log(ageArrs);
console.log(filtered);


console.log('----------------------------------');
const books = [{
        title: 'harry potter',
        price: 90,
        author: 'laxamikanth'

    },
    {
        title: 'india contritution',
        price: 120,
        author: 'john'

    },
    {
        title: 'wings of fire',
        price: 150,
        author: 'APJ Abdul kalam'

    }
]
const bookWithGst = books.map(book => {
    book.price = book.price * 0.18 + book.price
    return book
})
console.log(bookWithGst);
console.log(books);

console.log('----------deepcopy using spread oprator--------');




const bookWithGstDeepcopy = books.map(book => {
    const b = {...book }
    b.price = b.price * 0.18 + b.price
    return b
})
console.log(bookWithGstDeepcopy);
console.log(books);


// console.log('----------using map method-------');
// const product = [
//     {
//         productName: 'eyeline',
//         price: 999,
//         brand: 'mayline'
//     },
//     {
//         productName: 'lipstick',
//         price: 1000,
//         brand: 'mayline'
//     },
//     {
//         productName: 'trimmer',
//         price: 560,
//         brand: 'mayline'
//     },
//     {
//         productName: 'breado oil',
//         price: 200,
//         brand: 'mayline'
//     }
// ]

// const productWithGst=product.map(product=>{
//     const productcopy={...product}
//     productcopy.price=productcopy.price*0.03+productcopy.price
//     return productcopy
// })
// console.log(product);
// console.log(productWithGst);


// console.log('------------------------------');
console.log('----------using map method-------');
const product = [{
        productName: 'eyeline',
        price: 999,
        brand: 'mayline'
    },
    {
        productName: 'lipstick',
        price: 1000,
        brand: 'mayline'
    },
    {
        productName: 'trimmer',
        price: 560,
        brand: 'borolin'
    },
    {
        productName: 'breado oil',
        price: 200,
        brand: 'lakme'
    }
]
const productWithGst = product.map(product => {

    // 
    return product.price >= 700;
})
console.log(productWithGst);
console.log(product);





console.log('--------------join method----------');

const myArr = [100, 200, 300, 400, 550, ]
const str = myArr.join("-")
console.log("str-", str);



const fruits = ['apple,', 'green apple ', 'crusted apple']
const fruitscopy = fruits.join(",")
console.log('my fruites-', fruitscopy);