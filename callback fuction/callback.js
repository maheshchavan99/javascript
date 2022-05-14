function frist(callback) {

    setTimeout(() => {
        console.log('first function executed');
        callback();
    }, 0)
}

function second(params) {
    console.log('second function executed')
}
frist(second);