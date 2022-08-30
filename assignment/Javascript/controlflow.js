// Conditional Statement//
//hour b/w 6- 12pm return good morning
// if b/ 12- 6 good afternoon
// else return good evening


// if (condition) {
//     statement
// }
// else if (another condition) {
//     statement
// }
// else if (...another condition)
// statement
// else 
// statement

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');

}
else if (hour >12 && hour < 18) {
    console.log('Good Afternoon');
}
else 
console.log('Good Evening');

// Age problem//
let age = 20;

if (age >10 && age < 18) {
    console.log('You are Teenager')
}
else if (age > 18 && age < 60) {
    console.log('You are Adult');
}
else 
console.log('Senior Citizen')

// Switch case//
let role = 'moderator';
switch (role) {
    // one or more casec statements//
    case 'guest':
        console.log('guest user');
        break;

    case 'moderator':
    console.log('Moderator User');
    break;

    default:
        console.log('unknown User');
}

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User')

//LOOPS //

// for (initialExpression = 0; Condition say i < 5 i++){
//     console.log('')
// });

for (let i = 0; i < 5; i++) {
    console.log('Shwet Shikha');
}
console.log('Shwet');            // when i > 5 // this will be printed as it will come out of the loop//
// Working of a for loop //

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) console.log('Shwet', i);

}

// Display odd numbers from 100 to 200//
for (let i = 100; i < 200; i++) {
    if (i % 2 == 0) console.log(i, 'This is an even number');
    else (console.log(i, 'Odd Number'));
}

// WHILE LOOP//
let i = 0; 
while (i <= 5) {
if (i % 2 !== 0) console.log(i);
i++;
}

// Do while //
let w = 5;
do {
    if (w % 2 !== 0) console.log(i);

} while (i <= 5);
// this one evaluates last statement first instead of going in loop//

// INFINITE LOOPS//
 let y = 0;
 while (y < 5) {
    console.log(y);
    y++;
 }

 //FOR IN//
 const person = {
    name: 'Shwet Shikha',
    education: 'M.tech',
    place: 'New Delhi'
 };
 for (
    let key in person
    
 )
 console.log(key, person[key]);

 const colors = ['red', 'blue', 'green'];

 for (let index in colors)
 console.log(index, colors[index]);

 //for-of loop //
for (let color of colors)
console.log(color);

//BREAK AND CONTINUE//
let z = 0;
while(z <= 10) {
    // if (z === 5) break;
    if (z % 2 === 0){
        z++;
        continue;
    }
    console.log(z);
    z++;
}


