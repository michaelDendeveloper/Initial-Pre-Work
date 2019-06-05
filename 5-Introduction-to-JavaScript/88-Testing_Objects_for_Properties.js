/*I learned that the .hasOwnProperty(propertyname) method can be used to determine if that object has the given property name.  The method returns a true or false if the property is found or not.
*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  return "Not Found";
}
// Test your code by modifying these values

//console.log(childsobj);
checkObj("gift");
