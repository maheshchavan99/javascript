// debugger
function first(callback) {
    setTimeout(()=>{
        console.log('first exdecuted');
        callback()
    },0)
}
function second(){
    console.log('second executed');
}
first(second)