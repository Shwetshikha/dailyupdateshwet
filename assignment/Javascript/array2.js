// Finding Elements (Primitives) 
const numbers = [1,2,3,4,1,5];


console.log(numbers[4]);
console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));

//Finding Elements Reference types(Objects)//
const courses = [
    {id: 1, name: 'Shwet'},
    {id: 2, name: 'Shikha'},
    {id: 3, name: 'Manvi'},
    
];
// courses.includes({id: 3, name: 'Manvi'})     // que: why is it not getting included in output//
// courses.includes({id: 2, name: 'Manvi'}     // console.log(courses);
const course = courses.find(function(course) {
return course.name ==='Manvi'});
console.log(course);

// ARROW FUNCTION//
 const cours = courses.find(cours => cours.name === 'Shwet');
    console.log(cours);
    const cou = courses.find(cou => cou.name === 'Shikha');
    console.log(cou);


    // Declare a function and then find a particular object in it//
    let batches = [
        {id: 1, name: 'Engineering'},
        {id: 2, name: 'Medical'},
        {id: 3, name: 'Pharma'},
        {id: 4, name: 'Masters'},
    ]
    const batch = batches.find(batch => batch.name === 'Engineering')
    console.log(batch);

    // REMOVING ELEMENTS FROM AN ARRAY//
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    num.push(11,12,13,14,15,16,17,18,19,20,21);
    console.log(num);

    num.unshift(0);
    console.log(num);

    num.pop(); // for remving the last element in an array//
    num.shift(); // for removing the first element in an array//
    console.log(num);

    num.splice(4, 3); // for removing elements in an array from a particular point//
    console.log(num);


    //EMPTYING AN ARRAY//
    let numb = [1,2,3,4,5,6,7,8,9,10];
    let another = numb;
    console.log(another);

    numb = [];  // important: since it is pointing to a particular reference 
                // that's why it returns what is given in numb initially
    console.log(numb);
    console.log(another);
    // numb = [4]; // remove comment to see the changes in numb returning//
    console.log(numb); // whereas in here the numb is defind to be an empty array so, it is returning the assigned value

    // also by using slice we can emplty the array //
    numb.splice(0, numb.length);
    console.log(numb);
    numb.length = 0;

    console.log(numb);
    console.log(another);

    // next is by using pop//
    let some = [1,2,3,4,5,6,7];
    console.log(some);

    while (some.length > 0)
    some.pop();
    console.log(some);


    // COMBINING AND SLICING ARRAYS//
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

console.log(first);
console.log(second);
const combined = first.concat(second);
console.log(combined);

// SLICING//
const slice = combined.slice(2, 6);
const slice2 =combined.slice(3);
console.log(combined);
console.log(slice);
console.log(slice2);
//Slicing for strings or objects can also be done
const one = [{id: 1}];
const two = [4, 5, 6];
const sum = one.concat(two);
const slice3 = sum.slice(1);   // though 1 is not there but it has been sliced by taking the reference from id//

console.log(sum);
console.log(slice3);

// The SPREAD Operator//
const furniture = ['Table', 'Chair', 'Bed'];
const furniture2 = ['Sofa', 'Almirah', 'Study Table'];
const homeFurniture = [...furniture, ...furniture2, 'Bean Bag'];
console.log(homeFurniture); 
const copy = [...homeFurniture];
console.log(copy);
