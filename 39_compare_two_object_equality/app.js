// Define a constructor function for creating Student objects.
function Student(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

// Create two instances of the Student object.
var student = new Student('Ram', 21, 'Jalalabad');
var teacher = new Student('Ram', 21, 'Jalalabad');

// Check if the JSON representations of the two objects are the same.
if (JSON.stringify(student) === JSON.stringify(teacher)) {
    console.log('Object Matched :',student,'and',teacher); // If the objects match, log this message.
} else {
    console.log('Object not Matched'); // If the objects don't match, log this message.
}
