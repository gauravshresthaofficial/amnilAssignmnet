const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-z

const getRandomUpper = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z

const getRandomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * 10) + 48); // 0-9

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.-_";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Map character types to their corresponding random functions
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  num: getRandomNumber,
  sym: getRandomSymbol,
};

export { randomFunc };
