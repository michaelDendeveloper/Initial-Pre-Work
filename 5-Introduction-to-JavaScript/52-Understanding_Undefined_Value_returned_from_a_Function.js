/* I learned that a function can include the return statement, but this is not required.  If the function does not have a return statement, the returned value is undefined after the function processes the inner code.
*/
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum=sum+5;
  console.log(sum)
}


// Only change code above this line
var returnedValue = addFive();
