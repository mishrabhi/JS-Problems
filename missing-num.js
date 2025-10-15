// Find Missing Number in Array

// Problem:
// Array [1, 2, 3, 5] — one number missing from 1 to 5.
// Find it.

function missingNumber(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
console.log(missingNumber([1, 2, 3, 5])); //4
