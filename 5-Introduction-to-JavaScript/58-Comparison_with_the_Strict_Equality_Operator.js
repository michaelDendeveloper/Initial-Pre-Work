/*I learned that the strict equality operator is the counterpart to the equality operator.  The strict equality operator does not perform a type of conversion.  If the values being compared have different types, the test for equality returns false.
*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
