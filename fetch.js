fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//.then uses

      fetch("https://api.example.com/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
        

//2. Using async/await with try...catch

const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};      


