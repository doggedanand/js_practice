// Define a function to merge two arrays and remove duplicates
function mergeAndRemoveDuplicates(array1, array2) {

    var mergedArray = [];
    for (let i = 0; i < array1.length; i++) {
        mergedArray.push(array1[i]); // Add elements from array1 to mergedArray
    }
    for (let i = 0; i < array2.length; i++) {
        mergedArray.push(array2[i]); // Add elements from array2 to mergedArray
    }

    var uniqueArray = [];
    for (let i = 0; i < mergedArray.length; i++) {
        if (!uniqueArray.includes(mergedArray[i])) {
            uniqueArray.push(mergedArray[i]); // Add unique elements to uniqueArray
        }
    }

    return uniqueArray; // Return the merged and deduplicated array
}

// Define two arrays
var array1 = [1, 2, 3, 4, 5, 10];
var array2 = [4, 5, 6, 7, 8, 10];

// Call the mergeAndRemoveDuplicates function to merge arrays and remove duplicates
var mergedArray = mergeAndRemoveDuplicates(array1, array2);

// Output the merged and deduplicated array to the console
console.log(mergedArray);
