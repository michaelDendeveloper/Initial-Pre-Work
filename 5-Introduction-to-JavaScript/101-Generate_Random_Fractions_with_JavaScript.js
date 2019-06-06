/* I learned how to crate random numbers in JavaScript.  javaScript has a math.random() function that generates random decimal numbers between 0 inclusive and 1 excluded.  The function can return 0 but never quite return 1.  Since all function calls are resolved before the return executes, so it is possible to return the value of the function.
*/
function randomFraction() {

  // Only change code below this line.
  var fractionNum;
  fractionNum = Math.random(2);
  console.log(fractionNum);
  return fractionNum;



  // Only change code above this line.
}
