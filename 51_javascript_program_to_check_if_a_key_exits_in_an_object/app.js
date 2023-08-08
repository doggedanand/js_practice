// program to check if a key exists

// Create an object called 'person' with properties: name, age, gender
const person = {
  name: 'Anand',
  age: 21,
  gender: 'Male'
}

// Check if the key 'gender' exists in the 'person' object
const hasKey = 'gender' in person;

// Check the result of the key existence check
if (hasKey) {
  console.log('The key exists.'); // Display a message if the key exists
} else {
  console.log('The key does not exist.'); // Display a message if the key does not exist
}
