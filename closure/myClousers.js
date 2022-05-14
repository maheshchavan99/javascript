function outerfun() {
    let count=0
function innerfuc() {
    console.log('before counting')
    count=count+1
    console.log('after counting',count)
}

    return innerfuc
}
const updates=outerfun()
updates()
updates()
// outerfun()