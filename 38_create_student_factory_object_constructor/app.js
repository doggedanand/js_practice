function StudentFactoryObject(first, last, age, gender) {
  this.firstName = first; // Assign the 'first' parameter to the 'firstName' property
  this.lastName = last; // Assign the 'last' parameter to the 'lastName' property
  this.age = age; // Assign the 'age' parameter to the 'age' property
  this.gender = gender; // Assign the 'gender' parameter to the 'gender' property
}

var student1 = new StudentFactoryObject('Anand', 'Vishwakarma', 21, 'Male'); // Create a new instance of the 'StudentFactoryObject' using the 'new' keyword and pass the arguments
console.log(student1); // Output the 'student1' object to the console
