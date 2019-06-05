/* I learned that switch statements can be used to test a statement that can have many options as results. Statements are executed from the first matched case value until a break is encountered.
*/
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
