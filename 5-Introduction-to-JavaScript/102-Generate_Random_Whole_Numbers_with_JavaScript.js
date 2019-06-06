/* I learned that Math.floor() and Math.random() functions can be used to round numbers returned from the function that generates random numbers.  When used with multiples, whole numbers can be returned from the function that returns random numbers.
*/
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.
  console.log(Math.floor(Math.random() * 10));


  return Math.floor(Math.random() * 10);
}
