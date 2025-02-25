// Fetching JSON data from Fake JSON API
async function fetchUsers() {
  try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      // let response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
    let users = await response.json();
    users.splice(5);

    // Filtering Users (Find users whose names start with 'C')
    let filteredUsers = users.filter((user) => user.name.startsWith("C"));
    console.log("Users with name starting with 'C':", filteredUsers);

    // Sorting Users by Name (Alphabetical Order)
    let sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Sorted Users by Name:", sortedUsers);

    // Mapping Users to Get Only Emails
    let emails = users.map((user) => user.email);
    console.log("User Emails:", emails);

    // Finding the User with the Longest Name Using `.reduce()`
    let longestNameUser = users.reduce(
      (max, user) => (user.name.length > max.name.length ? user : max),
      users[0]
    );
    console.log("User with the Longest Name:", longestNameUser);

    // Adding a New User
    let newUser = { id: 6, name: "New User", email: "newuser@example.com" };
    users.push(newUser);
    console.log("After Adding New User:", users);

    // Updating a User's Email
    users.forEach((user) => {
      if (user.id === 1) user.email = "updated@example.com";
    });
    console.log("Updated Users:", users);

    // Deleting a User by ID
    users = users.filter((user) => user.id !== 2);
    console.log("After Deleting User with ID 2:", users);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to execute JSON operations
fetchUsers();
