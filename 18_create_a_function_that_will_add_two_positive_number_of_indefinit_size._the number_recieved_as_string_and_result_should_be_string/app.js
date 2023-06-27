// two variable x and y created and assigned the value
let x = "9512682354";
let y = "9512682354";

// a addTwoString function created with two parameter
function addTwoString(x, y) {
    // string x converted in number and stored in a variable 
    // and also y 
    let a = Number(x);
    let b = Number(y);

    // add of a and b stored in result vaiable 
    let result = a + b;
    // print the output in console
    console.log(result.toString());
}
// function called
addTwoString(x, y);