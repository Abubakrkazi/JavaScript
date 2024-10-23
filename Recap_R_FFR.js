//1. map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


//2. forEach()
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10 (prints each result separately)


//3. filter()
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


//4. find()
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2


//5. reduce()
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

