/* I learned that the logical and operator (&&) returns true if and only if the operands to the left of it are true.
This can replace nested if statements*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <=50 && val >= 25) {
    return "Yes";
  }
  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(25);
