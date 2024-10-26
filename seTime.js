//1. setTimeout  //Syntax:
setTimeout(function, delay);

//Example 1: Basic Usage of setTimeout
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");



//Example 2: Using setTimeout to Create a Delayed Alert
function delayedAlert() {
    console.log("Wait for 3 seconds...");
    setTimeout(() => {
      console.log("Alert after 3 seconds!");
    }, 3000); // 3 seconds delay
  }
  
  delayedAlert();

  

  //2. setInterval Example
  setInterval(function, interval);

  //Example 1: Basic Usage of setInterval
  let count = 0;

const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);
  count++;

  // Stop after count reaches 5
  if (count > 4) {
    clearInterval(intervalId);
  }
}, 1000); // Executes every 1 second

// output:

// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4


//Example 2: Creating a Digital Clock using setInterval
function showTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
  }
  
  // Call `showTime` every 1 second
  setInterval(showTime, 1000);

  
  //Example: Stopping an Interval
  //let count = 0;
const intervalId = setInterval(() => {
    console.log("Repeating: ", count);
    count++;
    if (count === 3) {
      clearInterval(intervalId);
      console.log("Interval stopped");
    }
  }, 1000);

  //output:
//   Repeating: 0
//   Repeating: 1
//   Repeating: 2
//   Interval stopped
