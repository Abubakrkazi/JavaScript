//1.Destructuring with Objects

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Destructuring assignment
  const { name, age, city } = person;
  
  console.log(name); // Output: John
  console.log(age);  // Output: 30
  console.log(city); // Output: New York
  

  //1.1  new variable names while destructuring:
  const { name: personName, age: personAge } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30



// 2. Destructuring with Arrays
const numbers = [10, 20, 30, 40, 50];

// Destructuring assignment
const [first, second, third] = numbers;

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(third);  // Output: 30


// 2.1  skip elements while destructuring:
const [, , thirdElement] = numbers;
console.log(thirdElement); // Output: 30

//3.Destructuring in Function Parameters
const user = {
    username: "alice",
    email: "alice@example.com",
    password: "123456"
  };
  
  function displayUser({ username, email }) {
    console.log(`User: ${username}, Email: ${email}`);
  }
  
  displayUser(user); // Output: User: alice, Email: alice@example.com
  



  //4.set default values while destructuring to handle undefined properties or elements:
  //const settings = { theme: "dark" };
const { theme, fontSize = 16 } = settings;

console.log(theme);    // Output: dark
console.log(fontSize); // Output: 16


//5. Nested Destructuring
const employee = {
    name: "Jane",
    address: {
      city: "San Francisco",
      zip: "94105"
    }
  };
  
  const { address: { city, zip } } = employee;
  console.log(city); // Output: San Francisco
  console.log(zip);  // Output: 94105
  