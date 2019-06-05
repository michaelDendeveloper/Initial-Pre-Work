/* I learned that keys can be used to lookup values in objects.  Looking up values is most valuable when the input data is limited to a certain range because the lookup can replace other conditional statements.
*/
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup ={
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
