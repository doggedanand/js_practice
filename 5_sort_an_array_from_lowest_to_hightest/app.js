


// array created
let array = [18, 2, 3, 14];





for (var index = 1; index < array.length; index++) {
    // loop will execute till array length but indexing will start form !
    for (var x = 0; x < index; x++) {
        // if value of x < index then loop will execute
        if (array[index] < array[x]) {
            // if array index value would be less than array x value then below condition will execute
            var sorted = array[index]
            // would be create new variable and in variable value would be assigned 
            array[index] = array[x]
            // variable x value would be store in index
            array[x] = sorted;
            // will change position according to highest and lowest number
        }
        console.log("=========swtich the position================")
        console.log(array)
        console.log("=========end of logs================")

    }
}
console.log(array);




