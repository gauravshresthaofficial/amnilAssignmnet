function fetchStockPrice() {
  setInterval(async () => {
    try {
      console.log("Fetching stock price...");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      console.log("Current stock price:", data);
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  }, 60000); // Fetch every 60 seconds
}

fetchStockPrice();
