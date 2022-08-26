// ITERATING AN ARRAY//
const numbers = [1,2,3];

for(let number of numbers)
console.log(number);
numbers.forEach(function(number)    
{
    console.log(number);
});

const elecApp = ['Television', 'Microwave', 'Blender'];

for (let number of elecApp)
console.log(number);
elecApp.forEach((number, index) => console.log(index, number)); 

// print all things with index//

//1. declaring a const or variable//
const subjects = ['English', 'Hindi', 'Social', 'science'];
subjects.push('SOM', 'TOM', 'MD');
console.log(subjects);
for (let number of subjects)
console.log(number);
subjects.forEach((number, index) => console.log(index, number));

// JOINING ARRAYS//
const numb = [1, 2, 3, 4];
const joined = numb.join(' ; ')             // join method returns in string//
console.log(joined);

const message = 'This sheet is for Javascript';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//SORTING ARRAYS//
const numbr = [3,5,7,8,9,1,0,2,4,6];
numbr.sort();
console.log(numbr);

// reversing the order//
numbr.reverse();
console.log(numbr);

//sorting the string//

const alpha = ['a', 'b', 'g', 'e','h', 'c', 'f','d']
alpha.sort();
console.log(alpha);
alpha.reverse();
console.log(alpha);

// SORT ACCORDING TO NAME//
const course = [
    {id: 1, name: 'B.Tech'},
    {id: 2, name: 'M.Tech'},
    {id: 3, name: 'B.sc'},
    {id: 4, name: 'B.Pharma'},
    {id: 5, name: 'b.llb'}
];
course.sort(function(a,b) {
    // a<b => -1
    // a>b => 1
    // a=== b => 0
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
});
console.log(course);

// SORT ACCORDING TO ID// 
// sorting is case sensitive i.e ASCII standards are followed while sorting//

course.sort(function(a,b) {
if (a.id < b.id) return -1;
else if (a.id > b.id) return 1;
return 0;
})

console.log(course);

//for solving the problem of case sensitivity we first change it to upper case//
course.sort(function(a,b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    return 0;

});
console.log(course);
