/* I learned that the if statement is a conditional logic statement in javaScript.  If the conditions in the statement are true, javaScript will execute the code in the curly braces in the statement, otherwise, the code will not execute. I wrote an if test to return strings from the function
*/
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);
