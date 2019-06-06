/*I learned that javaScript provides a function Object.freeze to prevent data mutation.  This makes it possible to freeze an object so that properties cannot be added, updated or deleted from the object.  Attempts to change the data will rejected without an error.
*/
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);




  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
