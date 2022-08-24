//
console.log(sum([1, 2, 3, 4]))

function sum(...items) {                    //use rest operator for passing varying parameters//
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];           //use of spread operator//
    return items.reduce((a, b) => a + b);

}

console.log(mod(2, 4, 6, 8))

function mod(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
    return items.reduce((a,b) => (a + b) % 2 );
}