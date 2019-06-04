/* I learned that the string manipulators that are available in javaScript can be combined to format output. This challenge uses a definition of a function and four parameters
*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
result = "My striped " + myNoun + " went to a " + myAdjective + " park and then " + myVerb + " the park bench " + myAdverb;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("cat", "little", "hit", "quickly");
