import { API_KEY } from "./key.js";
const exchangerateApi = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;
const countriesApi = "https://restcountries.com/v3.1/all";

// DOM Elements
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromAmt = document.getElementById("from-amt");
const toAmt = document.getElementById("to-amt");
const convertBtn = document.getElementById("convertBtn");
const notification = document.getElementById("notification");
const fromImg = document.getElementById("fromImg");
const toImg = document.getElementById("toImg");
const fromCountry = document.getElementById("fromCountry");
const toCountry = document.getElementById("toCountry");
const swapBtn = document.getElementById("swapBtn");

// Global Variables
let groupedCountries;

// Fetch Countries Data
const fetchCountriesData = async () => {
  console.log("Fetching countries data...");
  try {
    const response = await fetch("./countries.json");
    const data = await response.json();

    // Group countries by currency
    groupedCountries = groupCountriesByCurrency(data);

    // Sort grouped countries by currency code
    groupedCountries = sortGroupedCountries(groupedCountries);

    console.log("Number of currencies:", Object.keys(groupedCountries).length);
    console.log("Grouped countries:", groupedCountries);
  } catch (error) {
    console.error("Error fetching countries data:", error);
    showNotification("Failed to fetch countries data. Please try again.");
  }
};

// Group countries by currency
const groupCountriesByCurrency = (data) => {
  return data.reduce((acc, country) => {
    const currency = country.currencies
      ? Object.keys(country.currencies)[0]
      : null; // Use null for countries with no currency

    // Skip countries with no currency
    if (!currency) return acc;

    if (!acc[currency]) {
      acc[currency] = [];
    }

    acc[currency].push({
      name: country.name.common,
      flag: country.flags.svg,
    });

    return acc;
  }, {});
};

// Sort grouped countries by currency code
const sortGroupedCountries = (groupedCountries) => {
  return Object.keys(groupedCountries)
    .sort((a, b) => a.localeCompare(b)) // Sort currency codes in ascending order
    .reduce((acc, currency) => {
      acc[currency] = groupedCountries[currency];
      return acc;
    }, {});
};

// Populate Dropdown with Currencies
const populateDropdown = (selectElement, data) => {
  if (!data) return;

  // Clear existing options
  selectElement.innerHTML = "";

  // Add new options
  Object.keys(data).forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    selectElement.appendChild(option);
  });
  console.log("populated the", selectElement.id, "input element");
};

const handleFlagChange = (ele, selector, title) => {
  let imgEle = document.getElementById(ele);
  let src = groupedCountries[selector.value][0].flag;

  imgEle.src = src; // change image
  title.textContent = groupedCountries[selector.value][0].name; //change the title
};

// Swap the currency
const handleSwap = () => {
  [fromCurrency.value, toCurrency.value] = [
    toCurrency.value,
    fromCurrency.value,
  ];
  [fromAmt.value, toAmt.value] = [toAmt.value, fromAmt.value];

  // Optionally dispatch a change event to trigger any listeners
  fromCurrency.dispatchEvent(new Event("change"));
  toCurrency.dispatchEvent(new Event("change"));
};
// Convert Currency
const convertCurrency = async () => {
  const amount = parseFloat(fromAmt.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;
  console.log("Conversion operation started");

  if (from === to) {
    showNotification("Use different currencies for conversion.", toCurrency);
    return;
  }

  if (!amount || amount <= 0) {
    showNotification("Please enter a valid amount.", fromAmt);
    return;
  }

  convertBtn.disabled = true;

  try {
    const response = await fetch(`${exchangerateApi}${from}`); // Replace with `${apiURL}/NPR` for live data
    const data = await response.json();
    const convertedAmount = (amount * data.conversion_rates[to]).toFixed(2);
    toAmt.value = convertedAmount;
    console.log("Conversion successful!");
  } catch (error) {
    console.error("Error during conversion:", error);
    showNotification("Failed to convert currency. Please try again.");
  } finally {
    setTimeout(() => {
      convertBtn.disabled = false;
    }, 1000);
    console.log("Conversion operation stopped.");
  }
};

// Show Notification
const showNotification = (message, element = fromAmt) => {
  notification.textContent = message;
  element.focus();

  setTimeout(() => {
    notification.textContent = "";
  }, 3000);
};

// Event Listeners
convertBtn.addEventListener("click", convertCurrency);
swapBtn.addEventListener("click", handleSwap);
fromCurrency.addEventListener("change", () =>
  handleFlagChange("fromImg", fromCurrency, fromCountry)
);
toCurrency.addEventListener("change", () =>
  handleFlagChange("toImg", toCurrency, toCountry)
);

// Initialize App
const initApp = async () => {
  convertBtn.disabled = true;
  console.log("Initializing app...");
  await fetchCountriesData();
  populateDropdown(fromCurrency, groupedCountries);
  populateDropdown(toCurrency, groupedCountries);
  fromCurrency.value = "NPR";
  toCurrency.value = "INR";
  handleFlagChange("fromImg", fromCurrency, fromCountry);
  handleFlagChange("toImg", toCurrency, toCountry);
  console.log("Currencies loaded:", Object.keys(groupedCountries));
  convertBtn.disabled = false;
};

// Run App
console.log("Script is running!");
initApp();
