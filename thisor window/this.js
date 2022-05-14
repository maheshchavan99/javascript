console.log(this);
console.log(window);
console.log(this === window);
console.log('------------------');

const person = {
    fiestName: 'mahesh',
    lastName: 'chavan',
    getfullName: function() {
        console.log('this inside the getfull name', this);
        return this.fiestName + '  ' + this.lastName
    }
}
person.getfullName()


console.log('------------------');

function greet() {
    console.log('this inde greet', this);
    console.log('greet function');
}
window.greet()


console.log('-------------------');
const myobj = {
    getdata: function() {
        function test() {
            console.log('this inside the test function', this);
            console.log('test function');
        }
        test()
        return 1000
    }
}
myobj.getdata()


console.log('-----------------------------------arrow----------------------');


const myobj1 = {
    fName: 'varshita',
    lName: 'chavan',
    getName: function() {
        const test = () => {
            console.log('this inside test', this);
            console.log('test funcion');
        }
        test()
        return `${this.fName} ${this.lName}`
    }
}
myobj1.getName()