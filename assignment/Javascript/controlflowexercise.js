//QUE 1:
// Write a function that takes two numbers and return the maximum of the two//
let number = max(2,4)
console.log(number);

function max (x,y){
if (x > y) return x;
else return y; 
}

// find the image given is either in landscape mode or portrait mode//

let img = islandscape(120,240)
console.log(img);
function islandscape(width, height) {
    if (width > height) return 'landScape'
    else return 'Portrait'
} 
//write the same question for returning true or false //
console.log(isPortrait(240,480));
 function isPortrait(width, height) {
    return (width > height);
 }

 // fizzBuzz algorithm//
const output = fizzBuzz(false);
console.log(output);

 function fizzBuzz(input) {
 if (typeof input !== 'number')
 return 'Not a number';
 

 }
