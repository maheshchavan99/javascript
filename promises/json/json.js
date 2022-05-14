const jsObject = {
    fName: 'mahesh',
    lName: ';chavan',
    age: 24,
    iaAdult: false,
    hobbies: ["cricket", 'swiming'],
    address: {
        pincode: 5456786,
        city: "bengaluru"
    }
}
console.log('--json to javascript--')
const strinigifedJson = JSON.stringify(jsObject);
console.log(strinigifedJson);


console.log("-jSon to--javascript --");


const javascriptObject = JSON.parse(strinigifedJson);
console.log(javascriptObject)