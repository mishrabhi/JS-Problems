// Problem:
// Find the largest number in given array: [4, 10, 2, 8].

// The ... spread operator expands the array into individual elements.
function largestNumber(arr) {
  return Math.max(...arr);
}

console.log(largestNumber([4, 10, 6, 8])); //10
