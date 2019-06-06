/* I learned that the let keyword can be useful in finding and fixing errors in code because this keyword will throw an error if the value of the variable is overwritten after a value is assigned to the variable.
*/
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
