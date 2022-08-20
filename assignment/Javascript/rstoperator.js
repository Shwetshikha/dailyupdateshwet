// Function with varying number of parameters we can use rest operators//
function sum(...args) {   //this is rest operator//
// let total = 0;
// for (let value of arguments)
// total += value;
// return total;
console.log(args);
}
console.log(sum(1, 2, 3, 4, 5, 10));

// when we apply (...agrs) to a function it takes all the value of objects defined//
function sum(discount, ...prices) {
     let total = 0;
     return prices.reduce((a,b) => a + b);
}
console.log(sum(0.1, 20, 30));

//reduce //
function sum(...args) {
    return args.reduce((c, d) => c + d);
}
console.log(sum(1, 2, 3, 4, 5, 10));

function sum(discount, someValue , ...prices) {
    const total = prices.reduce((a, b, c) => a + b + c);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));