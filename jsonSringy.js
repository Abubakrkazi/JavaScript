//Basic Example:

const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// Output: '{"name":"Alice","age":25}'


//Pretty-Printed JSON:

const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);
/* Output:
{
  "name": "Alice",
  "age": 25
}
*/


//Pretty-Printed JSON:

const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);
/* Output:
{
  "name": "Alice",
  "age": 25
}
*/


//Using a Replacer Function:

const obj = { name: "Alice", age: 25, password: "secret" };
const jsonString = JSON.stringify(obj, (key, value) => {
  return key === "password" ? undefined : value; // Exclude "password"
});
console.log(jsonString);
// Output: '{"name":"Alice","age":25}'

//Stringify with Selected Properties:

const obj = { name: "Alice", age: 25, city: "Wonderland" };
const jsonString = JSON.stringify(obj, ["name", "city"]);
console.log(jsonString);
// Output: '{"name":"Alice","city":"Wonderland"}'

//Handling Arrays:

const arr = [1, "apple", { key: "value" }];
const jsonString = JSON.stringify(arr);
console.log(jsonString);
// Output: '[1,"apple",{"key":"value"}]'