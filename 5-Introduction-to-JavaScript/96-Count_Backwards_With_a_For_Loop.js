/*I learned that a loop can count backwards by defining the right conditions in the initialization, condition and final-expression of the loop definition. In this example, odd numbers from 9 counting down to 1 are pushed to myArray
*/
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i=9; i > 0; i-=2){
  myArray.push(i);
  console.log(myArray);
}
