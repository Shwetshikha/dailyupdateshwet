// ARRAY FROM RANGE//
const number = arrayFromRange(-10, 10);

console.log(number);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output;
};

//ARRAY INCLUDES//
const one = [1, 2, 3, 4, 5];
console.log(includes(one, 1));

function includes(array, searchElement) {
    for (let element of array)
     if (element === searchElement)
     return true;
     return false;
}

//EXCEPT//
const two = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = except(two, [1,2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
    if (!excluded.includes(element))
    output.push(element);
    return output;
}

// MOVING AN ELEMENT//
