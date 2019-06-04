/*I learned that the greater or equal to operator >= is like the greater operator, but returns true when the value is greater than or equal to the number being compared otherwise, it returns false
*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(9);
