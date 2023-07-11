// This function checks if the second argument is a substring at the end of the first argument
function confirmThEnding(firstArgument, secondArgument) {

    var firstLength = firstArgument.length; // Store the length of the first argument
    var secondLength = secondArgument.length; // Store the length of the second argument
    
    // Loop through the characters of the second argument
    for (var i = 0; i < secondLength; i++) {
        // Compare each character of the second argument with the corresponding character from the end of the first argument
        if (firstArgument[firstLength - secondLength + i] !== secondArgument[i]) {
            return false; // If any characters don't match, return false
        }
    }
    
    return true; // If all characters match, return true
}

// Test the function with example arguments
const result = confirmThEnding("A quick brown fox jumps over the lazy dog", "the lazy dog");
console.log(result); // Print the result to the console
