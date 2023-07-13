function getAreaOfTriangle(h, b) {
    // Function to calculate the area of a triangle given the height and base
  
    var area = (h * b) / 2; // Calculate the area using the formula: (height * base) / 2
    return area; // Return the calculated area
  }
  
  const height = 12; // Assign the value 12 to the 'height' variable
  const base = 11; // Assign the value 11 to the 'base' variable
  const result = getAreaOfTriangle(height, base); // Call the 'getAreaOfTriangle' function and pass the 'height' and 'base' values
  console.log(result); // Output the result (area of the triangle) to the console
  