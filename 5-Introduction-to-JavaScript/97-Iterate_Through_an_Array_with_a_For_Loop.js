/* I learned that it is common to iterate through the contents of an array in JavaScript.  It is possible to iterate through arrays using a for loop.
*/
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++){
  total = total + myArr[i];
  console.log( "Index " + myArr[i] + " Total is " + total);
  // console.log(myArr[i]);
}
