/*I learned the const declaration has many use cases in JavaScript.  It is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable.  Using the const declaration only prevents the reassignment of the variable identifier.
*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  //s = [2, 5, 7]; <- this is invalid
s[0] = 2;
s[1] = 5;
s[2] = 7;
return s;
  // change code above this line
}
editInPlace();
console.log(s);
