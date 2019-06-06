/*I learned that arguments can be passed as parameters.  This was changed to arrow notation
*/
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
