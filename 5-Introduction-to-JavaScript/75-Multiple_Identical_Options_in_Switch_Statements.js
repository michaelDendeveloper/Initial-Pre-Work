/*I learned that in JavaScript, switch statements are are evaluated until a break is encountered, so multiple inputs with the same output can be represented in switch statements without break statements.
*/
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
    switch(val){
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(9);
