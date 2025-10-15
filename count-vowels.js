// Problem:
// Count how many vowels are there in "javascript".

function countVowel(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowel("javascript")); //3
