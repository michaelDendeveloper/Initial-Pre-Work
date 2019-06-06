/*I learned that es6 introduces default parameters for functions. The default parameter kicks in when the argument is not specified ( it is undefined).  The parameter name will receive its default value "Anonymous when you do not provide a value for the parameter.  Default values can be added for as many paramters as desired."
*/
const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
