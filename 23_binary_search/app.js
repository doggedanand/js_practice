const binarySearch = (array, target) => {
    // Initilize the start index to 0
    let startIndex = 0;
    // Calculate the last index of element in array
    let endIndex = arr.length - 1;

    // Perform binary search while the start index is less than or equal to the end index
    while (startIndex <= endIndex) {
        // Calculate the middle index
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        // Check if the targe value is equal to middle index
        if (target === array[middleIndex]) {
            return console.log("Target was found  at index :" + middleIndex);
        }
        // If the target value is greater than the middle element, search the right side of the array
        if (target > array[middleIndex]) {
            console.log('searching the right side value');
            startIndex = middleIndex + 1;
        }
        // If the target value is less than the middle element, search the left side of the array
        if (target < array[middleIndex]) {
            console.log('searching the left side array')
            // Value of middle index -1 stroed in end index variable
            endIndex = middleIndex - 1;
        }
        else {
            console.log("Not Found this loop iteration. Looping another iteration.")
        }



    }
    console.log("Target value not found in array");


}
// Sample array and target value
let arr = [1, 5, 7, 10, 15, 24, 27, 31, 41, 58, 80, 118];
targetValue = 118;
console.log('targeted value is :', targetValue)
binarySearch(arr, targetValue);
