/*I learned that we can take the return value of a function and assign it to a varaible because everything to the right of the equal sign is resolved before the value is assigned. I called the processArg function with an argument of 7 to demonstrate this.
*/
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);
