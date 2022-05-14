function largestNumber(m) {

    for (let i = 0; i < m.length; i++) {
        i

        for (let j = 0; j < m.length; j++) {
            if (m[i] < m[j]) {
                let temp = m[i];
                m[i] = m[j];
                m[j] = temp;
            }

        }
    }
    console.log(m[1])
}
largestNumber([0, 45, 37, 87]);


console.log('-----------Anonymous----------');

let secondLar = function(m) {

    for (let i = 0; i < m.length; i++) {
        

        for (let j = 0; j < m.length; j++) {
            if (m[i] < m[j]) {
                let temp = m[i];
                m[i] = m[j];
                m[j] = temp;
            }

        }
    }
    console.log(m[1])
}
secondLar([0, 45, 37, 87]);

console.log('-----------Arrow----------');

let secondLarg = (m) => {

    for (let i = 0; i < m.length; i++) {
        i

        for (let j = 0; j < m.length; j++) {
            if (m[i] < m[j]) {
                let temp = m[i];
                m[i] = m[j];
                m[j] = temp;
            }

        }
    }
    console.log(m[1])
}
largestNumber([0, 45, 37, 87]);

console.log('-----------isfe----------');
(function(m) {

    for (let i = 0; i < m.length; i++) {
        i

        for (let j = 0; j < m.length; j++) {
            if (m[i] < m[j]) {
                let temp = m[i];
                m[i] = m[j];
                m[j] = temp;
            }

        }
    }
    console.log(m[1])
})([0, 45, 37, 87])