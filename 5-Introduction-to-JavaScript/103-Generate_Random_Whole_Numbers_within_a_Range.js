/* I learned that a random number  between a minimum number min and a maximum number max can be generated using the formula Math.floor(Math.random() * (max - min +1)) + min.
*/
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 95);
console.log(myRandom);
