// str variable created and value assigned
let str = "1.5,2.5,3.5,2.8,5,2.55,11,12.2,15";
// str variable will convert an array form and store in changestr
let changeStr = str.split(",");
 
// sum variable created and 0 value assigned
let sum = 0;
 // loop will run till the changeStr lenght
for (let i = 0; i < changeStr.length; i++) {
    // changeStr index value will convert in decimal form
    let numberStr = parseFloat(changeStr[i]);
 // will sum numberStr value in sum variable
    sum += numberStr;

}
// will print the total sum of str in console
console.log(sum)


