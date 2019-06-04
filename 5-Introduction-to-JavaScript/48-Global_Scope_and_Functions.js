/* I learned that in javaScript, scope refers to the visibility of the variables.  Variables having a global scope are defined outside of  a function block and can be seen everywhere in the javaScript code.  Since variables that are declared without the var are declared in global scope by default,  using variables without the keyword can create unintended consequences elsewhere in the code when a function is called again, so always declare variables with var.
*/
// Declare your variable here
var myGlobal;
myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
