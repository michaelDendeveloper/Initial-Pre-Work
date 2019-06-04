/* I learned that else if can be used together with other tests to allow additional code to manage additional conditions
*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  }
  else {return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(10);
