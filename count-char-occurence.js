// Count Occurrences of Each Character in a String

function countCharOccurrence(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(countCharOccurrence("hello world")); //{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
