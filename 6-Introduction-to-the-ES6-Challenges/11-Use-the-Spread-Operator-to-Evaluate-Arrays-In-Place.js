/*I learned that the spread operator can be used to expand arrays and other expressions where parameters or elements are expected.  The spread operator only works in-place, like an argument to a function in an array literal.
*/
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
