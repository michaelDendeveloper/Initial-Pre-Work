/*I learned to use getters and setters to return the value of an object's private variable and setters are meant to modify the value of an object's private variable based on the value passed into the setter function
*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(fahernheit){
    this.fahernheit=fahernheit;
  }
  // getter
  get temperature(){
    return 5 / 9*(this.fahernheit-32);
  }
  //setter
  set temperature(Celsius){
    this.fahernheit = Celsius*9.0/5 + 32;

  }
  }


  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
