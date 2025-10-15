// Find Intersection of Two Arrays

// Problem:
// Input: [1,2,3,4] and [3,4,5,6]

function intersection(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); //[3, 4]
