console.log('started');



const myPromise = new Promise((resolve, reject) => {
    if (10 > 1) {
        const fetchdData = [100, 200, 300, 400, 500, ]
        resolve(fetchdData);


    } else {
        reject('Data is fetched faild');
    }
})


//solution to call hall

myPromise.then((data) => {
    console.log("first then", data);
    const updateData = data.map(val => {
        return val + 100;
    })
    return updateData
}).then((result) => {
    console.log('second then', result)
    const filterdData = result.filter(val => val > 300)
    return filterdData
}).then((dataWithFilter) => {
    console.log("third then ", dataWithFilter);

}).catch(err => {
    console.log(err);
})
console.log('ended')