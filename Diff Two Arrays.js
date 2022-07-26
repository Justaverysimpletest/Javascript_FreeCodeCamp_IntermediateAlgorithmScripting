//Compare two arrays and return a new array with any items
//only found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    //let newArr=arr1.concat(arr2);
  return arr1.concat(arr2).filter(i=>!arr1.includes(i) || !arr2.includes(i))
}

 
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])