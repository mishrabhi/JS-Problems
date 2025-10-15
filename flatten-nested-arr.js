// Flatten Nested Array

// Problem:
// Input: [1, [2, [3, 4]], 5]

function flattenNestedArr(arr) {
  return arr.flat(Infinity);
}
console.log(flattenNestedArr([1, [2, [3, 4]], 5])); //[ 1, 2, 3, 4, 5 ]
