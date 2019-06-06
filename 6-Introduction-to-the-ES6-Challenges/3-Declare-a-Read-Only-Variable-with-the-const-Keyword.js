/*I learned the const Keyword can be used to assign values that will not be changed.  This prevents reassigning values that are meant to stay constant.  A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
*/
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
