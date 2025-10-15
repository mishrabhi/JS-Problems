// Check if Two Strings are Anagrams
// Problem

// Two strings are anagrams if they contain the same letters with the same frequency.
// E.g., "listen" and "silent"

function isAnagram(str1, str2) {
  let clean1 = str1.toLowerCase().split("").sort().join("");
  let clean2 = str2.toLowerCase().split("").sort().join("");
  return clean1 === clean2;
}

console.log(isAnagram("listen", "silent")); //true

//Explanation:

//1. Convert both the strings into lowercase.
//2. Split both the strings
//3. Sort them according to alphabetical order
//4. Now join them to normalise
//5. Compare the sorted versions => if they're equal, they are anagrams.
