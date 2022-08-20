//dynamic language//
// let x = 1;
// x = 'a';

function sum(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5));

//using "callee" //
function sum() {
    let total = 0;
    for (let value of arguments)
    total += value;
    return total;
}
console.log(sum(1,2,3,4,5,6,10));