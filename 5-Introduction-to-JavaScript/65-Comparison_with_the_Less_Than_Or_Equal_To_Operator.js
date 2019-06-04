/*I learned that the less than or equal to operator works like the greater than or equal to operator, but returns true if the number to the left is less than or equal to the number on the right, otherwise, it returns false. The less than or equal to operator converts data types. 
*/
function testLessOrEqual(val) {
  if (val <=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(25);
