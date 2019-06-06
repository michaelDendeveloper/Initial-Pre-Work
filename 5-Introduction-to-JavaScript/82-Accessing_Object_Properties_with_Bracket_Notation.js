/* I learned that bracket notation is the other way to access properties of an object.  Use the bracket notation if the property in the object has a space in the name. Access the properties the same way as the dot notation, except enclose the property name in stead of using the dot.
*/
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
console.log(entreeValue + " " + drinkValue);
