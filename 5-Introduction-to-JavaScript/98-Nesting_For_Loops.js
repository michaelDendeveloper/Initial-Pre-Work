/* I learned how to write the code for a for loop nested inside another for loop, the two loops are used to iterate through an array of arrays.  The arrays inside array arr are of different length, so the inside loop iterates based on the length of the array, as is the outside loop.
*/
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i< arr.length; i++){
    console.log(arr[i]);
    for (var j = 0; j < arr[i].length; j++){
      product = product*arr[i][j];
      console.log(product);
      console.log(arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
