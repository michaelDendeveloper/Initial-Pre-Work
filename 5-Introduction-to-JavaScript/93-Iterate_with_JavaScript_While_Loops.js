/* I learned about the first iteration technique in javaScript.  The while loop runs while a specified condition is true and stops once that condition is no longer true.  The syntax is while, parentheses for the condition, curly braces, then the events to repeat inside the curly braces.
*/

// Setup
var myArray = [];

// Only change code below this line.
var i=0;

while (i < 5){
    myArray.push(i);
    i++;
    console.log(myArray);
}
