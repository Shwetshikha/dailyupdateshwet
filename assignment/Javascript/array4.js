// TESTING THE ELEMENTS OF AN ARRAY//
const numbers = [1, -2, 3, 4, 5];

const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive);
 // SOME //
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive);

//FILTERING AN ARRAY//

let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3];

const filtered = numb.filter(function(value) {
    return value <= 0;
});
console.log(filtered);

//MAPPING AN ARRAY//
const num = [1, -1, 2, 4 ,8, -9, -7, -6];
const filter = num.filter(n => n >= 0);

const items = filter.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join() +'</ul>';
// MAPPING AS OBJECT//
const html1  = filter.map(n => {
    const obj = {value: n  };
    return obj; 

});

console.log(items);
console.log(html1);

//Mapping for practice// // map the values given greater than 50//
const one = [1, 2, 3, 50, 60, 70, 100, 78];  //declaring the constants//
const filtr = one.filter(n => n >= 50);      //filtering according to the condition//
const two = filtr.map(n=> {                 // declaring another const for mapping//
    const obj1 = {value: n};
    return obj1;
});
console.log(two);                          // printing the mapped value//


// WRITING A CLEANER CODE//
const person = [1,2,3,4,5,6,7,8,9,10];
const item = person
    .filter(n => n >= 4)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(item);

//REDUCING AN ARRAY//
const three = [1, 2, 3, 4, 5, 6, 7,8,9,10];
let sum = 0;
for (let n of three)
sum += n;
console.log(sum);

const add = three.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
});
console.log(add);

// cleaner code//
const four = [11, -2, 9, -8, 7, 7];
const addition = four.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(addition);