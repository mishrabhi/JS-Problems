// Find Longest Word in a Sentence

// Problem:
// Input: "I love programming in JavaScript"

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

console.log(longestWord("I love programming in JavaScript")); //programming
