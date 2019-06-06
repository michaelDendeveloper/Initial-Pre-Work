/* I learned the scope of i when it is declared in a block and in a function.  The condition tests return block in the conditional test and outside of that block, i is returned as a variable with the scope of the whole function because it was declared before the conditional block.
*/
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope"
    i = "block scope";
    console.log("Block scope i is: ", "block scope");
  }
  console.log("Function scope i is: ", "function scope");
  return i;
}
console.log(checkScope());
