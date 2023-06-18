
// str variable created and string value assigned
let str = "123456789";


// reverse variable created 
let reverse = "";
// loop will run till str length and loop will run opposite
for (var i = str.length - 1; i >= 0; i--) {
// str index value will store in reverse variable every time
    reverse += str[i]
    // for space have used br tag
    document.write('<br>')
}


// reverse string value will print in console
console.log(reverse);
 