/* I learned that variables declared within a function and the function parameters have local scope.  The variables are only visible within that function.
*/
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();
var myVar;
// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
