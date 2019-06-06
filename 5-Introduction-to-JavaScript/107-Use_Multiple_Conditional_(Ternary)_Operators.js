/*I learned that that multiple ternary operators can replace multiple lines of code for conditional testing.  Multiple tests that would take many lines of code can be replaced with all of the tests on one line.
*/
function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

(checkSign(0));
