
function selectionSort(arr) {
    // Iterate over the array
    for (var i = 0; i < arr.length; i++) {
        // Assume the current index is minimum
        let min = i;
        // Find the index of the minimum element in the unsorted portion of the array
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                // Update the index of the minimum element
                min = j;
            }
        }
        // Swap the minimum element with the current element, if necessary
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    // Return the sorted array
    return arr
}

const array = [2, 4, 3, 1, 6, 5, 7, 8, 9];
console.log("Before selection sort - " + array);
let array1 = selectionSort(array);
console.log("After selection sort - " + array1);