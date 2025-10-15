// Count Occurrences of Each Element

// Problem:
// Input: ['apple', 'banana', 'apple']

function countOccurence(arr) {
  const count = {};
  for (let item of arr) {
    count[item] = (count[item] | 0) + 1;
  }
  return count;
}

console.log(countOccurence(["apple", "banana", "apple"])); //{ apple: 2, banana: 1 }
