function random(min, max) {
    console.log(Math.floor(Math.random()) * (max - min + 1) + min);
}
random(1, 50);


console.log('---------arrow -----------');
let random1 = (min, max) => {
    console.log(Math.floor(Math.random()) * (max - min + 1) + min);
}
random1(100, 50);



console.log('---------anonymous -----------');
let random2 = function(max, min) {
    console.log(Math.floor(Math.random()) * (max - min + 1) + min);
}
random2(100, 50);



console.log('---------ISFE -----------');
(function(min, max) {
    console.log(Math.floor(Math.random()) * (max - min + 1) + min);
})
(100, 50);