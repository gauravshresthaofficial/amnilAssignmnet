const updateLength = (ele, text) => {
  ele.textContent = text;
};

const shufflePassword = (password) => {
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export { updateLength, shufflePassword };
