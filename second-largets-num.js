// Find Second Largest Number

// Problem:
// Input: [10, 40, 20, 30]

function secondLargestNum(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargestNum([10, 40, 20, 30])); //30
