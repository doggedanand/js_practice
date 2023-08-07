// This function calculates the length of the shortest word in a string based on assigned values to letters.

function shortestWordLength(str) {

    // Assign numerical values to letters
    var words = {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        e: '5',
        f: '6',
        g: '7',
        h: '8',
        i: '9',
        j: '10',
        k: '11',
        l: '12',
        m: '13',
        n: '14',
        o: '15',
        p: '16',
        q: '17',
        r: '18',
        s: '19',
        t: '20',
        u: '21',
        v: '22',
        w: '23',
        x: '24',
        y: '25',
        z: '26'
    }

    var currentWord = 26;  // Initialize the current shortest word value

    // Loop through each character in the input string
    for (var i = 0; i < str.length; i++) {

        var currentShortestWord = str[i]  // Get the current character

        var currentValue = parseInt(words[currentShortestWord])  // Convert the character's value to an integer
    

        // Compare the current word value with the current character's value
        if (currentWord > currentValue) {
            currentWord = currentValue  // Update the current shortest word value if smaller
        }
    }
 
    return currentWord;  // Return the value of the shortest word
}

var str = "rich student";  // Input string
var result = shortestWordLength(str);  // Call the function to calculate the shortest word length
console.log('smallest word length is :', result);  // Display the result
