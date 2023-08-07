// Encode a string to Base64
function encodeInBase64() {
    const dataToEncode = 'anand'; // String to be encoded

    const encodedData = btoa(dataToEncode); // Encode to Base64
    console.log('encoded string is:', encodedData); // Display the encoded string
}

encodeInBase64(); // Call the encode function

// Decode a Base64-encoded string
function decodeFromBase64() {
    const encodedData = 'YW5hbmQ='; // Replace with your Base64-encoded data

    const decodedData = atob(encodedData); // Decode from Base64
    console.log('decoded string is:', decodedData); // Display the decoded string
}

decodeFromBase64(); // Call the decode function
