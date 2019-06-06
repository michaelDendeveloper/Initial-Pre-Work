/*I learned that iteration in JavaScript with a for loop is the most common type of loop.  The number of iterations can be determined before entering the loop.  For loops are declared with three optional expessions separated by semicolons.  The initilization statement is executed one time only before the loop starts.  It defines and sets up the loop variable.  The loop will continue as long as the condition evaluates to true.  When false, the loop stops executing.
*/
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(i = 0; i < 5; i++){
    myArray.push(i+1);
    console.log(myArray[i]);
}
