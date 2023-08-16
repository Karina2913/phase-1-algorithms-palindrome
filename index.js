const { stringify } = require("mocha/lib/utils");

function isPalindrome(word) {
  const length = word.length;

  //loop through the letters of the word
  for (let i = 0; i < length / 2; i++) {
    //determine if first letter is same as last
    if (word[i] !== word[length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}

/* 
  Add your pseudocode here

  function name of function(argument)
    if the argument received is palindrome,
      then return true
    if the argument is not palindrome,
      then return false
*/

/*
  Add written explanation of your solution here
  If palendrome, then the array of letters would have to equal the array
  of letters if input backwards

  Questions:
  1. We're going to need equality sign, what do we need on each side?
  2. How do we determine to put array of letters from a string backwards?
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
