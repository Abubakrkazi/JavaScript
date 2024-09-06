const numbers=[80.90,100,150,200,250,300];
console.log(numbers);

// show any addresses value
console.log(numbers[2]);

//...set update any value in any address
numbers[2]=5000;
console.log(numbers);




// ..... Add value in arry;
numbers.push(700);
console.log(numbers);

//Delete last value in arry
numbers.pop();
console.log(numbers);

// Delte value in arry at first position
numbers.shift();
console.log(numbers);

//Add value in arry at first position
numbers.unshift("");
console.log(numbers);

// kono elemenst ase kina dekte
// includse - case sencitive 
 console.log(numbers.includes(700));

 // kono  element er index dekar jonno-indexOf
 console.log(numbers.indexOf('....'));

 //Arry seck-isArry
 console.log(Array.isArray(numbers));
