function truncateString(str, length) {
    // Check if length is less than or equal to 0
    if (length <= 0) {
        return str; // Return the original string as it is
    }

    let truncated = "";
    for (let i = 0; i < length; i++) {
        truncated += str[i]; // Add each character from the original string to the truncated string
    }
    truncated += "..."; // Add ellipsis at the end of the truncated string

    return truncated; // Return the truncated string
}

const string = "I want to become a very good software developer.";
const length = 11;
const truncatedString = truncateString(string, length);
console.log(truncatedString);
