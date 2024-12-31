console.log('Hello!');
// 1. Write an arrow function that takes an object containing temperature details and prints them.
const printTemperature = (obj) =>
  `Location: ${obj.location}, Temperature ${obj.temperature} degree celsius`;
console.log(printTemperature({ location: 'New York', temperature: 15 }));
// Output: Location: New York, Temperature: 15 degree celsius

console.log(printTemperature({ location: 'London', temperature: 10 }));
// Output: Location: London, Temperature: 10 degree celsius

// 2. Write an arrow function that takes an object containing fruit details and prints them.
const printFruit = (obj) =>
  `Fruit Name: ${obj.fruitName}, Fruit Color: ${obj.fruitColor}, Available: ${
    obj.inStock ? 'true' : 'false'
  }`;
console.log(
  printFruit({ fruitName: 'Apple', fruitColor: 'Red', inStock: true })
);
// Output: Fruit Name: Apple, Fruit Color: Red, Available: true

console.log(
  printFruit({ fruitName: 'Grapes', fruitColor: 'Green', inStock: false })
);
// Output: Fruit Name: Grapes, Fruit Color: Green, Available: false

// 3. Write an arrow function that takes an array containing a student's name and their scores, and prints them.

const printStudentScores = (arr) => {
  const [name, ...rest] = arr;
  return `Student: ${name}, Scores:${rest}`;
};
console.log(printStudentScores(['Alice', 90, 85, 95]));
// Output: Student: Alice, Scores: 90, 85, 95

console.log(printStudentScores(['Bob', 80, 75, 85]));
// Output: Student: Bob, Scores: 80, 75, 85

// 4. Write an arrow function that takes an object containing details of a product and prints them by renaming the keys.

const printProductDetails = ({ name, price }) =>
  `Product: ${name}, Price: ${price}`;
console.log(printProductDetails({ name: 'Laptop', price: 899 }));
// Output: Product: Laptop, Price: $899

console.log(printProductDetails({ name: 'Phone', price: 599 }));
// Output: Product: Phone, Price: $599

// 5. Write an arrow function that takes an object containing a person's details with default parameters and prints them. Rename name and age.

const printPersonDetails = ({ name = 'Anonymous', age = 'Unknown' }) =>
  `Name:${name},Age:${age}`;
console.log(printPersonDetails({ name: 'John', age: 30 }));
// Output: Name: John, Age: 30

console.log(printPersonDetails({}));
// Output: Name: Anonymous, Age: Unknown
