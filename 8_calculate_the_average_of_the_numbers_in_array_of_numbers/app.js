let array=[1,2,3,4,5,6,7,8,9,0]
// array created

let sum=0;
// sum variable created 

for(var i=0; i<array.length; i++){
    // loop will execute till array length
    sum+=array[i]
    // array index value will store in sum variable every time and will be auto sum
}
let average=sum/array.length;
// will create average variable and devide with sum variable and array length value
console.log(average);
// will print average of array in console