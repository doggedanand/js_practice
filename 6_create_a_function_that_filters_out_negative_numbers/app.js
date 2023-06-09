



// array created
let array=[1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9]
// empty array variable created
let integer=[]


// loop will execute till array length
for(var index=0; index<array.length; index++)
{
    // will be condition check if array index would be greater than 0 then next code will execute
    if(array[index]>0){
    // array index value would be store in empty array varable
        integer.push(array[index]);
    }
}


// will be print all array interges expect negative
console.log(integer);

