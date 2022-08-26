const numbers = [3, 4];
// numbers = [3, 5];
numbers.push(5, 6);  //for adding some number at end//
numbers.unshift(1, 2);  // for adding some number at the beginning//
numbers.splice(2, 0, 'a', 'b')



console.log(numbers)

// Finding elements in an array// // we get -q1 when the element doesn't exists in the array//
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.push('a', 'b', 'c');
console.log(num.indexOf('a'));   // -1 coz 'a' string doen't exists
console.log(num.indexOf('1'));  // -1 coz '1' is string here//
console.log(num.indexOf(1));    // we get the position becaUSE it exists at place 0//
console.log(num.indexOf(9)); 
console.log(num.includes(1));    //to find that particular number or string is there in the array or not we use 'includes'//
console.log(num);
console.log(num.includes('a'));

//for finding the array particularly from a particular position//
console.log(num.indexOf(9, 2));
console.log(num.indexOf(10, 0)); // the second position defines from where the search is begining//
 // Array are special variable, which can hold more than one value//
 //
 