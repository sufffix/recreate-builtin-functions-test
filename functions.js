// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
  // loop through array to find item that matches and return true
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false; // if loop doesnt find anything, return false
}

function indexOf(item, array) {
  // loop through array to find item that matches and return index
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1; // if loop doesnt find anything, return -1
}

function reverse(array) {
  let reversedArray = [];
  // loop through array backwards and push to new array, return new array
  for (let i = 1; i <= array.length; i++) {
    reversedArray.push(array[array.length - i]);
  }
  return reversedArray;
}

function slice(start, stop, array) {
  let slice = [];
  // loop through slice of array and push to new array, return new array
  for (let i = start; i < stop; i++) {
    slice.push(array[i]);
  }
  return slice;
}

function concat(array1, array2) {
  // push arrays to new array, return new array
  let mergedArray = [];
  mergedArray.push(...array1, ...array2);
  return mergedArray;
}

function join(sep, array) {
  let joinedString = "";
  // loop through array and add item then separator to new string, return new string
  for (let i = 0; i < array.length; i++) {
    joinedString += array[i];
    if (i != array.length - 1) {
      joinedString += sep;
    }
  }
  return joinedString;
}

function max(array) {
  // loop through array, if next item > last max item set local variable, return max
  let currentMax = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > currentMax) {
      currentMax = array[i];
    }
  }
  return currentMax;
}
