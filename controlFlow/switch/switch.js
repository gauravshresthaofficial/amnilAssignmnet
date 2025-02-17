// Handling User Roles
const userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("You have full access to the system.");
    break;
  case "editor":
    console.log("You can edit content but not manage users.");
    break;
  case "viewer":
    console.log("You can only view content.");
    break;
  default:
    console.log("Unknown role. Please contact support.");
}
