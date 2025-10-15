// Problem:
// Check if a given string is a palindrome (reads same forward & backward).
// Example: "madam" → true

function isPalindome(str) {
  const reversed = str.split().reverse().join("");
  return str === reversed;
}
console.log(isPalindome("madam")); //true
