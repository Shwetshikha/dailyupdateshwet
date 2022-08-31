// BITWISE OPERATOR//
// 1 = 00000001
//2 = 00000010
//R = 00000011 = 3 //
//R = 00000000 = 0 //&//

console.log(1 | 2);  //bitwise OR//
console.log(1 & 2);  //bitwise &//

// ACCESS CONTROL SYSTEM//
// read = 00000100
// write = 00000110
// execute = 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);
let message = (myPermission & readPermission) ? 'yes': 'no';
console.log(message);

// EXERCISE// // Swap the value of declared variables//
// codes are executed according to their precedence values//

let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);