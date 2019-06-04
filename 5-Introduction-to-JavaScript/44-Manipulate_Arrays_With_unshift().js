/* I learned that you can use unshift() function to add elements to the front of an array.  Use the .unshift() the same way as the .push() function. The .push() function adds the element at the end of the array, the .ushift() function adds the element at the beginning of the array.
*/
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);
