/* I learned that using the conditional operator can reduce code by replacing the conditional tests with a single line
*/

function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(1, -1));
