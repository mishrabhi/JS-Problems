// Problem:
// Find sum of [5, 7, 2, 10].

function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(arraySum([5, 7, 2, 10]));
