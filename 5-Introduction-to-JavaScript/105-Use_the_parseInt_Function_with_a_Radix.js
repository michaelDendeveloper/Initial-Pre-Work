/* I learned that it takes a second argument specify the base of the number in a string in the parseInt function. The second number is a Radix, which specifies the base of the number in the string.  This is used for converting strings such as strings that represent numbers in base 2 to integers.
*/
function convertToInteger(str) {
  return parseInt(str,2);
}

console.log(convertToInteger("1110011"));
