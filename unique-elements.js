//Find All Unique Elements Between Two Arrays

function uniqueElements(arr1, arr2) {
  let combined = [...arr1, ...arr2];
  let count = {};
  let result = [];

  for (let num of combined) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num] === 1) result.push(Number(num));
  }

  return result;
}

console.log(uniqueElements([1, 2, 3], [3, 4, 5])); //[1,2,4,5]

// Explanation:

// Merge both arrays.

// Count occurrences.

// Keep only elements that appear once.
