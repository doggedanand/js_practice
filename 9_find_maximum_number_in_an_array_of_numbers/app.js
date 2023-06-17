

let array = [11, 33, 22, 44, 66, 55, 77, 99, 88]
// array created

for (var i = 1; i < array.length; i++) {
    // loop will run till array length value
    for (var j = 0; j < i; j++) {
        // loop will run till i value
        if (array[i] < array[j]) {
            // will be check array i value is less than array j value
            var sorted=array[i]
            // will be create a shorted variable and array indexing value will store in that variable
            console.log(sorted+'sorted vaiable')
            array[i]=array[j]
            // j index value will replace from i index
             
            array[j]=sorted
            // shorted value will replace from j index
        }
    }
}
let max=array[array.length-1]
// new variable created and max value will get 
console.log(max)
// value will print in console 
