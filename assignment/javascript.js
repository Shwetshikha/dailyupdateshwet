var num1 = 34;
var num2 = 24;
console.log(num1 * num2 );

var num1 = 677;
var num2 = 78.99;
var str1 = "This is a string"
var str2 = "This is also a string"
 // objects
 var marks = {
    manvi : 24,
    shwet : 24,
    shubham : 24
 }
 console.log(marks);

 // Booleans
 var a = true;
 var b = false;
 console.log(a, b)

 var und = undefined;
 console.log(und);

var n = null;
console.log(n);

//Data type: undefined,null, number, string, boolean, symbol
// Refernce data types: Arrays and objects

var arr = [1,2,3,4,5]
console.log(arr)

console.log(arr[1])
console.log(arr[0])

var x = 10
var y = 20
console.log("Thee value of x + y is", x+y);
console.log("Thee value of x - y is", x-y);
console.log("Thee value of x * y is", x*y);
console.log("Thee value of x / y is", x/y);

//Assignment operator//
var c = b;
console.log(c);
 var x = 46;
 var y = 56;
 console.log(x == y)

 // Logical operators//
 console.log (true && true);
 console.log(true && false);
 console.log(false && true);
 console.log(false && false);

 // Logical not//
 console.log(!true);
 console.log(!false);

 function avg (a,b) {
   return (a+b)/2;
 }
 c1 = avg(4, 6);
 c2 = avg (14, 16);
 console.log(c1, c2);
 console.log('3');

 // conditionals in java script//
 //var age = 61;
//  if (age > 8){
//    console.log('you are not a kid');
//  }
//  else {
//    console.log('you are a kid');
//  }
 // single if is statement //
 // else if condition//
 age = 70
//   if (age > 18){
//    console.log("Officially Adult")
//   }
//   else if (age > 30) {
//    console.log('Adult')
//   }
if (age < 18){
   consolw.log("Kid")
}  
  else if (age > 60){
   console.log("Senior Citizen")
  }
  console.log('End of ladder')