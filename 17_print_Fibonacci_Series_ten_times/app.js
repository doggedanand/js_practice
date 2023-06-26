// three variable created and have assigned the value
var num1 = 1;
var num2 = 1;
var fnum = 0;
// loop will run till 10
for (let i = 1; i < 10; i++) {
    //if i will be less then 1 so i value will store in fum variable
    if (i <= 1) {
        fnum = i;
        
    } else {
        // add of num2 and num1 will store in fnum variable
        fnum = num1 + num2;
        // num2 value stored in num1
        num1 = num2;
        // fnum value stored in num2 
        num2 = fnum;
    }
    // output print in console
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}