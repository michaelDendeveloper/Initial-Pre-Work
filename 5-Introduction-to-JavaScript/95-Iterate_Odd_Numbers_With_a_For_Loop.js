/*I learned that changing the final-expresion, it is possible to change the number of steps the counter can take, so it is possible to count even, odd or different multiples in the for loop
*/
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i +=2 ){
  myArray.push(i);
  console.log(myArray);
}
