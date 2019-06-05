/* I learned that another use of the bracket notation on objects is to access a property which is stored as the value of a variable.  This can be useful in lookup tables and iterating through an object's properties.  Another way to use this notation is when the property's name is collected dynamically during program execution.  Do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.
*/
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];
console.log(player);   // Change this Line
