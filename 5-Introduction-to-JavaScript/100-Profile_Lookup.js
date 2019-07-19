/*I learned to access items of objects in JavaScript by combining for loops and if statements
to iterate through each item in the object and compare a value to see if it is in the array. If it is, return the associated value, if not, return that the items are not in the list
*/
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for(var i = 0; i < contacts.length; i++){
  if(contacts[i].firstName === name){
    if(contacts[i].hasOwnProperty(prop)){
      //console.log(contacts[i][prop]);
      return contacts[i][prop];
    } else return "No such property";
  }
} return "No such contact"
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira","address"));
