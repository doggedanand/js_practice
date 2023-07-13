function starPrint() {

    for (var i = 1; i < 6; i++) {
        // Outer loop to control the number of rows

        for (var j = 0; j < i; j++) {
            // Inner loop to print the asterisks in each row
            document.write('*'); // Output an asterisk
        }

        document.write("<br>"); // Output a line break to start a new row
    }
}

starPrint(); // Call the 'starPrint' function to execute the code
