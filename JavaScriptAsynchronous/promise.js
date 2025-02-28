// Promises are a way to handle asynchronous operations more cleanly, avoiding callback hell. A promise represents a value that may be available now, later, or never. It's like promising to do something in the future.

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData()
  .then((data) => console.log("data:", data))
  .catch((error) => console.error("Error fetching:", error));
