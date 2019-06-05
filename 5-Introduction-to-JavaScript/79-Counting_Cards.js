/* I learned to use the switch statement in a function  where several options have the same result without a break statement.  This switch statement is combined with if statements to determine the result in a card - counting program.  The switch statement accounts for number and string input and returns number and string output.
*/
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count=count +1;
    break;
    case 7:
    case 8:
    case 9:
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count = count -1;
    break;
  }
  if(count <=0){
    return count + " Hold";
  }
  if(count > 0){
    return count + " Bet";
  }
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(3); cc(2); cc("A");cc("10");cc("K");
