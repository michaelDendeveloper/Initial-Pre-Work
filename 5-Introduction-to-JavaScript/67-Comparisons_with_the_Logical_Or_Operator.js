/* I learned how to use the logical or operator to reduce code by replacing logical comparisons
*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val <10 || val >20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(0);
