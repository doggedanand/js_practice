let ar = [1, 2, [15, [23], [5, 12]], [100]];

// println(sumArray(ar));

function sumArray(ar)
{
    // initilize the variable of sum with a vlaue 0
    let sum = 0;
    // iterate over each element 'el' in the array of 'ar'
    for(let el of ar)
    {
         // check if 'el' is an array
        if (Array.isArray(el))
        {
            // calculate the sum of elements in 'el' using the 'sumArray' function
            el = sumArray(el);
            // output of the value of 'el' in console
            // console.log(el)
        }
        // add the value of 'el' in 'sum' variable
        sum += el;
    }
    // return the calculate sum
    return sum;
}
// output the sum of element in 'ar' to the console 
console.log(sumArray(ar));

 