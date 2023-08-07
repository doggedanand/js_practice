// Loop through rows (i represents rows)
for (var i = 0; i < 5; i++) {
    // Loop through columns (j represents columns)
    for (var j = 0; j < 5; j++) {
        // Check for the current row (i) and generate the corresponding pattern
        if (i == 0) {
            // Print the pattern for the first row
            document.write('*****&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp*****&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp****');
            break; // Exit the loop for the first row
        } else if (i == 1) {
            // Move to a new line for the second row
            document.write('<br>');
            // Print the pattern for the second row
            document.write('*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp**&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp**&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*');
            break; // Exit the loop for the second row
        } else if (i == 2) {
            // Move to a new line for the third row
            document.write('<br>');
            // Print the pattern for the third row
            document.write('*****&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp*&nbsp&nbsp*****&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp*&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*');
            break; // Exit the loop for the third row
        } else if (i == 3) {
            // Move to a new line for the fourth row
            document.write('<br>');
            // Print the pattern for the fourth row
            document.write('*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp**&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp**&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*');
            break; // Exit the loop for the fourth row
        } else if (i == 4) {
            // Move to a new line for the fifth row
            document.write('<br>');
            // Print the pattern for the fifth row
            document.write('*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*&nbsp&nbsp****');
            break; // Exit the loop for the fifth row
        }
    }
}
