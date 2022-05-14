console.log('start')

function add(a, b) {
    setTimeout(() => {
        console.log('mahivarsh')
    }, 200);
    console.log(a + b)
}
add(20, 40);

setTimeout(function() {
    console.log('varshimahi');
}, 5000)

console.log('end')