// Remove Duplicates from Array

// Problem:
// Input: [1, 2, 2, 3, 4, 4, 5]

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
