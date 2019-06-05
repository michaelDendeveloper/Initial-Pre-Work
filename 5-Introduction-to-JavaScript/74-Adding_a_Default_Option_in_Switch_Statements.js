/* I learned that a default statement is useful to a switch statement because it provides an option if none of the available conditions are reached.  This prevents unexpected results if one of the conditions is not met.
*/
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
  case "a":
    return "apple";
    break;
  case "b":
    return "bird";
    break;
  case "c":
    return "cat"
    break;
  default:
   return "stuff";
   break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
