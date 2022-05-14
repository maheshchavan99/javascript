console.log('===========string method=========')
const str = 'hello';
let res = str.toLocaleUpperCase()
console.log(res);

console.log('--------lower case----------')
const str1 = 'HI MAHESH';
let res1 = str1.toLowerCase()
console.log(res1);

console.log('-------chatAt----------');


const chart = 'welcome to testyentra'
let chart1 = chart.charAt(13)
console.log(chart1);


console.log('--------include --------');
const inclu = "welcome"
included = inclu.includes('m');
console.log(included);


console.log('--=--indexof----');
let index = "good mornig";
const indexpostion = index.indexOf('o', 3)
console.log(indexpostion);


console.log('replace---------------');

const rep = 'maheshchavan'
replece = rep.replace('ch', 'varshi');
console.log(replece);

console.log('-----trim------');
const emailtrim = "                www.flikart.com                   "
console.log('before trim', emailtrim);
let emailTrim = emailtrim.trim()
console.log("after trim", emailTrim);


console.log('--------substring------');
const string1 = 'heloo mahesh chavan'
newstring = string1.substring(2, 8);
console.log(newstring);