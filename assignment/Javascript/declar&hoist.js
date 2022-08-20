//we can declare a function beforehand also
//The process of moving a "function declaration" on top of a file we are using//
walk();
run();
move();



//Defining the function//
function walk() {
  console.log("walk");
};
// Function Expression//
let run = function() {
  console.log('run')
};
let move = run;
run();
move();
