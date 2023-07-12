
function vowelCounter(str) {
    // Variable to store the vowel count
    var count = 0;
    // Array that contains the vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    // Loop through each character in the string
    for (var i = 0; i < str.length; i++) {
        // Loop through each vowel in the vowels array
        for (var j = 0; j < vowels.length; j++) {
            // Check if the current character matches the current vowel
            if (str[i] === vowels[j]) {
                // If there is a match, increment the count
                count++
            }
        }

    }
    // Return the total count of vowels
    return count;

}

const str = 'my name is anand vishwakarma'

const result = vowelCounter(str);
console.log(result);