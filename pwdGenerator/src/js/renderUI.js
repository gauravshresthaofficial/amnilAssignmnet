// renderUI.js
export const renderUI = () => {
  document.querySelector("#app").innerHTML = `
      <div class="container">
        <h1>Password Generator</h1>
        <main class="content">
          <div id="result">
            <div id="input-div">
              <label for="password" hidden>Password</label>
              <input type="text" id="password" readonly>
              <button id="generate">Generate</button>
            </div>
            <button id="copy">Copy</button>
          </div>
          <div id="settings">
            <label for="length">Password Length</label>
            <input type="range" id="length" min="4" max="20" value="8">
            <p id="lengthDisplay"></p>
          </div>
          <div id="options">
            <div>
              <input type="checkbox" id="uppercase" checked>
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
              <input type="checkbox" id="symbols" checked>
              <label for="symbols">@#$</label>
            </div>
          </div>
        </main>
        <p id="notification" class="hidden"></p>
      </div>
    `;
};
