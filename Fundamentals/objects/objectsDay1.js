// Sample JSON data
const jsonString = `{
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    },
    "contact": [
      {
        "type": "email",
        "value": "john.doe@example.com"
      },
      {
        "type": "phone",
        "value": "555-1234"
      }
    ]
  }`;

// 1. Parsing JSON string to JavaScript object
const jsonData = JSON.parse(jsonString);
console.log("Parsed JSON Data:", jsonData);

// 2. Accessing JSON data
console.log("Name:", jsonData.name);
console.log("Age:", jsonData.age);
console.log("First Course:", jsonData.courses[0]);
console.log("City:", jsonData.address.city);
console.log("Email:", jsonData.contact[0].value);

// 3. Modifying JSON data
jsonData.age = 31;
jsonData.courses.push("Art");
jsonData.address.zip = "67890";
jsonData.contact.push({ type: "fax", value: "555-5678" });

console.log("Modified JSON Data:", jsonData);

// 4. Adding new properties to JSON data
jsonData.gender = "Male";
jsonData.address.country = "USA";

console.log("JSON Data with New Properties:", jsonData);

// 5. Deleting properties from JSON data
delete jsonData.isStudent;

console.log("JSON Data after Deleting Property:", jsonData);

// 6. Converting JavaScript object back to JSON string
const updatedJsonString = JSON.stringify(jsonData);
console.log("Updated JSON String:", updatedJsonString);

// 7. Filtering JSON data
const filteredCourses = jsonData.courses.filter((course) => course.length > 4);
console.log("Filtered Courses:", filteredCourses);

// 8. Mapping JSON data
const contactTypes = jsonData.contact.map((contact) => contact.type);
console.log("Contact Types:", contactTypes);

// 9. Searching in JSON data
const emailContact = jsonData.contact.find(
  (contact) => contact.type === "email"
);
console.log("Email Contact:", emailContact);

// 10. Iterating over JSON data
console.log("Iterating over Courses:");
jsonData.courses.forEach((course, index) => {
  console.log(`Course ${index + 1}: ${course}`);
});

// 11. Deep cloning JSON data
const clonedJsonData = JSON.parse(JSON.stringify(jsonData));
console.log("Deep Cloned JSON Data:", clonedJsonData);

// 12. Merging JSON data
const additionalData = {
  hobbies: ["Reading", "Traveling", "Cooking"],
  education: {
    degree: "Bachelor",
    major: "Computer Science",
  },
};

const mergedJsonData = { ...jsonData, ...additionalData };
console.log("Merged JSON Data:", mergedJsonData);

// 13. Checking if a property exists in JSON data
const hasEmail = jsonData.contact.some((contact) => contact.type === "email");
console.log("Has Email Contact:", hasEmail);

// 14. Counting the number of properties in JSON data
const numberOfProperties = Object.keys(jsonData).length;
console.log("Number of Properties:", numberOfProperties);

// 15. Converting JSON data to an array of key-value pairs
const jsonArray = Object.entries(jsonData);
console.log("JSON Data as Array:", jsonArray);

// 16. Converting an array of key-value pairs back to JSON data
const jsonFromArray = Object.fromEntries(jsonArray);
console.log("JSON Data from Array:", jsonFromArray);
