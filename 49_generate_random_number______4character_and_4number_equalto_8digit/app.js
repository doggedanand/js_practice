// Define a function to generate a random string
function generateRandomString() {
    // Define character sets for letters and numbers
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var randomString = ''; // Initialize an empty string to store the random string

    // Generate 4 random letters
    for (var i = 0; i < 4; i++) {
        var randomCharacterIndex = Math.floor(Math.random() * characters.length);
        var randomCharacter = characters.charAt(randomCharacterIndex);
        randomString += randomCharacter; // Append the random letter to the string
    }

    // Generate 4 random numbers
    for (var j = 0; j < 4; j++) {
        var randomNumberIndex = Math.floor(Math.random() * numbers.length);
        var randomNumber = numbers.charAt(randomNumberIndex);
        randomString += randomNumber; // Append the random number to the string
    }

    return randomString; // Return the final random string
}

// Call the generateRandomString function to get a random string
var randomString = generateRandomString();

// Output the random string to the console
console.log(randomString);
