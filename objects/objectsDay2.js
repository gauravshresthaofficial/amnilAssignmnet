//  Sample JSON Dataset
let users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    isActive: true,
    balance: 5000,
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    isActive: false,
    balance: 3000,
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    email: "charlie@example.com",
    isActive: true,
    balance: 8000,
  },
  {
    id: 4,
    name: "David",
    age: 40,
    email: "david@example.com",
    isActive: true,
    balance: 1000,
  },
  {
    id: 5,
    name: "Eve",
    age: 28,
    email: "eve@example.com",
    isActive: false,
    balance: 6000,
  },
];

//  Extract all user emails using `.map()`
let emails = users.map((user) => user.email);
console.log("User Emails:", emails);

//  Find active users using `.filter()`
let activeUsers = users.filter((user) => user.isActive);
console.log("Active Users:", activeUsers);

//  Calculate total balance using `.reduce()`
let totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log("Total Balance:", totalBalance);

//  Find a user by email using `.find()`
let foundUser = users.find((user) => user.email === "charlie@example.com");
console.log("User with email charlie@example.com:", foundUser);

//  Sort users by balance using `.sort()`
let sortedByBalance = [...users].sort((a, b) => a.balance - b.balance);
console.log("Users Sorted by Balance:", sortedByBalance);

//  Check if any user has a balance over 9000 using `.some()`
let hasHighBalance = users.some((user) => user.balance > 9000);
console.log("Is there a user with balance over 9000?", hasHighBalance);

//  Check if all users are active using `.every()`
let allActive = users.every((user) => user.isActive);
console.log("Are all users active?", allActive);

//  Convert user names to uppercase using `.map()`
let upperCaseNames = users.map((user) => user.name.toUpperCase());
console.log("Uppercase Names:", upperCaseNames);

//  Get names of users older than 30 using `.filter()` and `.map()`
let olderUsers = users.filter((user) => user.age > 30).map((user) => user.name);
console.log("Users Older Than 30:", olderUsers);

//  Find the user with the highest balance using `.reduce()`
let richestUser = users.reduce(
  (max, user) => (user.balance > max.balance ? user : max),
  users[0]
);
console.log("User with the Highest Balance:", richestUser);
