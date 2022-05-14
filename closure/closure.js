function outer(){
    let count=0
    function inner( ) {
        console.log( 'inner function');
        count=count+1
        console.log('count:-',count);
    }
    return inner
}


//what is the use of the closure? why its use?
// to preserve the values
// to data privacy
function increaseCounter( ) {
    let counter=0
    function counterUpdate( ) {
        counter=counter+1
        console.log(counter);
        return counter
    }
    return counterUpdate
}
const counterIncrease=increaseCounter()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()

const c=increaseCounter()
c()



    function increaseCounter(params) {
        let counter=0
        function  counterUpdate(params) {
            counter=counter+1
            console.log( counter);
            return counterUpdate
        }

    }





//self invoking function will beexecuted once
//hence counter can't be reinitialised to 0 again
//only counterupdate function will be able to change
//the counter variable value

const counterInc=(function(){
    let counter=0
    function counterUpdate( ) {
        counter=counter+1
        console.log(  counter);
        return counter
    }
    return counterUpdate
})()
counterInc()
counterInc()
counterInc()
counterInc()
counterInc()
