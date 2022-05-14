// document.write(hello);
//if i d is present it retrun element else null
// it retrun single element
const element = document.getElementById('demo');
console.log(element);

/// inner element change
element.innerText = 'Dom';
element.style.background = 'lightblue'
    // it retrun single element
const pElement = document.querySelector('.test')
console.log(pElement);


const tagElement = document.querySelector('h1')
console.log(tagElement);

const IdElement = document.querySelector('#demo')
console.log(IdElement);

console.log('-------classname-------');
const personElement = document.getElementsByClassName('person');
console.log(personElement)

// personElement[0].innerText = 'ram';
// personElement[1].innerText = 'krisha';
// personElement[2].innerText = 'bengaluru';
for (let i = 0; i < personElement.length; i++) {
    if (i === 0) {
        personElement[i].innerText = 'sita'

    } else if (i === 1) {
        personElement[i].innerText = 'varshi'
    } else {
        personElement[i].innerText = 'mumbai'
    }
}
///it retrun array element

console.log('------------tagname----------');
const personElementAll = document.getElementsByTagName('p');
console.log(personElementAll);

for (let i = 0; i < personElementAll.length; i++) {
    console.log(personElementAll[i]);
    personElementAll[i].style.border = ' 2px solid black'
    personElementAll[i].style.color = 'balck'
    personElementAll[i].style.fontSize = '40px'
    personElementAll[i].style.borderRadius = '8px'

}
///it retrun array element
console.log('----------querySelectorAll--------------');
const allPerson = document.querySelectorAll('.person')
console.log(allPerson);
const personA = document.querySelectorAll('p');
console.log(personA);




console.log('=========create element========');
const h2Element = document.createElement('h2');
h2Element.innerText = "add h2 element"
h2Element.style.color = 'red'
console.log(h2Element)


document.body.appendChild(h2Element);

console.log('=========================');
const lableElement = document.getElementsByTagName('label');
lableElement[0].className = 'lableTag';
lableElement[1].classList = 'labelTag labelBg'
console.log('------------------------');
const userElement = document.getElementById('user')

// innnerHTMl will be the string assHML code.
userElement.innerHTML = '<h1>my name is mshesh chavan</h1>'
    // innerText will be parse the string as plain text
const userElement1 = document.getElementById('user1')
userElement1.innerText = '<h1>my name is mshesh chavan</h1>'


console.log('----------------------------');
// to hidden the element
const ele = document.getElementById('nameList');
ele.style.display = 'none'
    // to show the element
const nameList = document.getElementById('nameList');
nameList.style.display = 'block'