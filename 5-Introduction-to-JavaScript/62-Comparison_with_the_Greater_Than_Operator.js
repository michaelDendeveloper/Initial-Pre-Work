/*I learned the greater than operator > compares the values of two numbers.  If there is a larger number to the left, it returns true, otherwise it returns false.  The greater than operator will convert data types of values while comparing
*/
function testGreaterThan(val) {
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(0);
