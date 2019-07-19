/* What I learned : I created the tests to determine where prop was tracks and value was not empty, wihin that test,
if there is an element for tracks, push the track into tracks, if there is not, create tracks, and add the element
to the end.  Otherwise, the requirements determine that if value is empty, delete the element.  Otherwise,
update the element to the value.  I tested the result in freecodecamp many times, but it did not pass, it did,
however, work as expected when copied to repl.it and every condition was tested.  I added many statements
to write to the console in order to demonstrate where the updates are happening
*/
var collection = {
  "2548": {
    "album":"Slippery When Wet",
    "artist":"Bon Jovi",
    "tracks":[
      "Let it Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468":{
    "album":"1999",
    "artist":"Prince",
    "tracks":[
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245":{
    "artist":"Robert Palmer",
    "tracks": []
  },
  "5439":{
    "album":"ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
  if(prop === "tracks" && value !== ""){
    console.log(collection[id][prop] + "  property is tracks");
    //if the property has tracks
    if(collection[id][prop]){
      console.log(collection[id][prop]+ "  property has tracks, before push ");
      collection[id][prop].push(value);
      console.log(collection[id][prop]+ " value after push")
    } else {
      console.log(collection[id][prop] + "  property does not have tracks , create tracks and add value");
      collection[id][prop]=[value];
      console.log(collection[id][prop]+" property after tracks is added, new track")
    }
  }
   else {
     if(value === ""){
       console.log(collection[id][prop] + "  value is empty, delete value");
       delete collection[id][prop];
     }  else {
       console.log(collection[id][prop] + " before adding the value");
       collection[id][prop]=[value];
       console.log(collection[id][prop]+ " after adding the value");
     }

     }
   return collection;
}

updateRecords(1245,"album","Riptide");
