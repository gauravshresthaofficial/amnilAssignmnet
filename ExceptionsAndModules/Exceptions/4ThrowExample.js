let json = '{"age": 30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    // user-defined throw statement
    // if 'name' is not found, throw a SyntaxError with a custom message
    throw new SyntaxError("Incomplete data: no name");
  }

  console.log(user.name);
} catch (error) {
  console.log("An error caught");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}
