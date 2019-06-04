/*I learned that a queue is a data structure where items are ordered.  New items are added at the back of the queue and old items are taken off from the front of the queue.  This is first in, first out.
*/
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var shiftedVar = arr.shift()
  return shiftedVar;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([], 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
