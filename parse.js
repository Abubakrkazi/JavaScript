//1. Parse a simple JSON string:

const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);
console.log(obj);
// Output: { name: 'Alice', age: 25 }

console.log(obj.name); // Output: Alice
console.log(obj.age);  // Output: 25


//2. Parse an array:

const jsonString = '[1, 2, 3, 4]';
const arr = JSON.parse(jsonString);
console.log(arr);
// Output: [1, 2, 3, 4]

console.log(arr[2]); // Output: 3



//3. Using a reviver function:

const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString, (key, value) => {
  if (key === "age") {
    return value + 5; // Add 5 to the age
  }
  return value;
});
console.log(obj);
// Output: { name: 'Alice', age: 30 }