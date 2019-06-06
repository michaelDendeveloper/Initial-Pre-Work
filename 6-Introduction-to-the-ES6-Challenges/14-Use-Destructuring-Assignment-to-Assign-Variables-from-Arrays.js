/* I learned to use destructing assignment to assign variables from arrays. The spread operator unpacks all contents of an array into comma-separated lists.  You cannot pick or choose which elements to assign to variables.
*/
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
