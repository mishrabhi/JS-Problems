// Find the Most Frequent Element in an Array
// Problem:

// Given an array, find the element that appears most frequently.

function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostFrequentElement;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mostFrequentElement = num;
    }
  }
  return mostFrequentElement;
}

console.log(mostFrequent([1, 3, 2, 1, 4, 1, 3, 3, 3]));

// Explanation:

// Use an object freq to store counts of each number.

// Increment count each time you encounter the number.

// Keep track of the number with the highest count (maxCount).
