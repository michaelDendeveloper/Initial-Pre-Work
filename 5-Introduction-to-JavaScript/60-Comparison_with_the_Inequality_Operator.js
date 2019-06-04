/*I learned that the inequality operator != returns false when values are equal and true when values are not equal.  the inequality operator will convert data types of values when comparing.
*/
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual();
