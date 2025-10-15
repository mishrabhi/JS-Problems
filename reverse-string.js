// Problem:
// Write a function to reverse a given string.
// Example: "hello" → "olleh"

// split() breaks into array → reverse() reverses → join() combines.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
