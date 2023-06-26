// twoPointDistance function create with 4 parameter
function twoPointDistance(x, y, x1, y1) {
// have apply the formula of distance between two point and value stored in distance variable 
// and have return the distance 
    let distance = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);
    return distance;
}

// function twoPointDistance called with 4 arguments and stored in distance variable
var distance = twoPointDistance(1, 2, 3, 4);
// print output in console
console.log(distance); 
