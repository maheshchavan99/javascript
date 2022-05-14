const person={
    firstName:'srinivas',
    lastName:'cr',
    getFullName:function(middleName){
        console.log( this);
        return`${this.firstName} ${this.lastName}`;
    }
}
console.log( person.firstname);
console.log( person.lastName);
console.log( person.getFullName('srinivas'));
console.log( person.firstname);
const join={
    firstName:'john',
    lastName:'p'
}
console.log( join.firstName);
console.log( join.lastName);

console.log('-------------------------------------------------');
// thiswill point the object passed as first parameter to the call method 
// EX below - this will point to join object instead of person object

const joinFullName =person.getFullName.call(join,'Abraham')
console.log( joinFullName);


const joinFullName1 =person.getFullName.apply(join,'Abraham')
console.log( joinFullName1);




console.log('------------------bind function--------------------');
const teacher={
    firstName:'Ajith',
    lastName:'k',
    getFullName:function(age,subjects){
        console.log( this);
        console.log( subjects);
        return `${thi.firstName}${this.lastName}`
    }
}
const guru={
    firstName:'guru',
    lastName:'g'
}

/* create a copy of the getfullname and it return the function and it will point to the object
passed as first parameter*/ 

const getFullName=teacher.getFullName.bind(guru,10)
getFullName(['English'])
getFullName(['English','Kannada'])
getFullName(['English','Kannada'])
