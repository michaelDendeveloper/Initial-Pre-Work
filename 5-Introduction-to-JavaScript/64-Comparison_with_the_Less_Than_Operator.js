/*I learned that the less than operator is like the greater than operator, but if the number to the left is less than the number to the right, it returns true, otherwise it returns false.  The less than operator converts data types while comparing
*/
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(55);
