/* I learned ther are many comparison operators in javaScript.  All comparison operators return a boolean value true or false.  The equality operator == compares two values and returns true if they are equivalent or false if not.  Equality is used for comparison, and assignment = is used to assign a value to a variable.  In comparisons, one data type is converted to another in order to compare different data types.  This is known as type coercion.  It can compare items 1==1 // true 1==2 // false 1 == '1' // true "3" = 3 // true
*/
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
