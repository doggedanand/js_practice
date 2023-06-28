let arr = [11, 12, 13, 5, 6];

// Function to perform insertion sort
insertionSort = () => {
   // Iterate over the array starting from the second element
   for (var i = 1; i < arr.length; i++) {
      // Iterate over the sorted portion of the array
      for (var j = 0; j < i; j++) {
         // Compare the current element with elements in the sorted portion
         if (arr[j] > arr[i]) {
            // Swap the elements if the current element is smaller
            var sorted = arr[i];
            arr[i] = arr[j];
            arr[j] = sorted;
         }
      }
   }
   console.log(arr);
   return arr;
}

insertionSort();
