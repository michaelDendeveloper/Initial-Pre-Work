/* ES6 provides new syntax to help create objects.  Use the keyword class. This does not create a class as in object-oriented programming, it is just a syntax.
The correct sequence is to define a constructor function, then use the use the new keyword to instantiate a new instance  of the object*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable{
    constructor(name){
      this.name=name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
