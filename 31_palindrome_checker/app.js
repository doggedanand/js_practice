// Function to check if a word is a palindrome
function palindromeChecker(word) {
    // Loop through the characters of the word
    for (let i = 0; i < word.length; i++) {
      // Check if the characters at symmetric positions are different
      if (word[i] !== word[word.length - 1 - i]) {
        return false; // If they are different, it's not a palindrome, so return false
      }
    }
    return true; // If all characters match, it's a palindrome, so return true
  }
  
  // Word to check for palindrome
  let palindromeWord = 'eye';
  
  // Call the palindromeChecker function with the word as an argument
  const result = palindromeChecker(palindromeWord);
  
  // Print the result to the console
  console.log(result);
  
  // An array of words to check for palindrome
  let words = ['eye', 'tomato', 'mom', 'madam'];
  