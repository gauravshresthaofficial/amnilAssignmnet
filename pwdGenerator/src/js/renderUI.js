export const renderUI = () => {
  // Render the loading spinner initially
  document.querySelector("#app").innerHTML = `
    <div id="loading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `;

  // After 1 seconds, replace the loading spinner with the main UI
  setTimeout(() => {
    document.querySelector("#app").innerHTML = `
      <div class="container">
        <h1>Password Generator</h1>
        <main class="content">
          <div id="result">
            <div id="input-div">
              <label for="password" hidden>Password</label>
              <input type="text" id="password" readonly>
              <button id="generate">&#x21BB</button>
            </div>
            <button id="copy">Copy</button>
          </div>
          <div id="settings">
            <label for="length">Password Length:</label>
            <input type="range" id="length" min="4" max="20" value="8">
            <p id="lengthDisplay">8</p>
          </div>
          <div id="options">
            <div>
              <input type="checkbox" id="uppercase">
              <label for="uppercase">ABC</label>
            </div>
            <div>
              <input type="checkbox" id="lowercase" checked>
              <label for="lowercase">abc</label>
            </div>
            <div>
              <input type="checkbox" id="numbers" checked>
              <label for="numbers">123</label>
            </div>
            <div>
              <input type="checkbox" id="symbols">
              <label for="symbols">@#$</label>
            </div>
          </div>
          <div id="strength-indicator">
            <p>Password Strength: <span id="strength-text">Weak</span></p>
            <div id="strength-bar">
              <div id="strength-bar-fill"></div>
            </div>
          </div>
        </main>
        <p id="notification" class="hidden"></p>
        <p class="footer">Gaurav Shrestha</p>
      </div>
    `;
  }, 1000);
};
