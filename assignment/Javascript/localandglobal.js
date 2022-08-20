 
 function start()
 {
 const message = 'Hi';
 if (true) {
    const another = 'bye'
 }
 for (let i = 0; i < 5; i++ ) {
    console.log(i);
 }
 }
 console.log(message);

 // these code will give error because the variables are not defined in global or local scope//

 const color = 'red';

 function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
 }
 function stop() {
    const message = 'bye';
 }
 