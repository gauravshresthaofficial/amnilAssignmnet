import { API_KEY } from "./key.js";
const exchangerateApi = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;
// const exchangerateApi = `https://api.exchangerate-api.com/v4/latest/`;
const countriesApi = "https://restcountries.com/v3.1/all";

// DOM Elements
const container = document.querySelector(".container");
const loading = document.querySelector(".loading");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromAmt = document.getElementById("from-amt");
const toAmt = document.getElementById("to-amt");
const convertBtn = document.getElementById("convertBtn");
const notification = document.getElementById("notification");
const swapBtn = document.getElementById("swapBtn");

// Global Variables
let groupedCountries;
let exchangerates;
const DEFAULT_FROM_CURRENCY = "NPR";
const DEFAULT_TO_CURRENCY = "INR";

// Fetch Countries Data
const fetchCountriesData = async () => {
  console.log("Fetching countries data...");
  try {
    const response = await fetch(countriesApi);
    const data = await response.json();

    // Group countries by currency
    groupedCountries = groupCountriesByCurrency(data);

    // Sort grouped countries by currency code
    groupedCountries = sortGroupedCountries(groupedCountries);

    // console.log("Number of currencies:", Object.keys(groupedCountries).length);
    // console.log("Grouped countries:", groupedCountries);
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

    // Initialize the group for the currency if it doesn't exist
    if (!acc[currency]) {
      acc[currency] = {
        name: country.currencies[currency].name, // Get currency name
        countries: [],
      };
    }

    // Add the country to the currency's group
    acc[currency].countries.push({
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
    // console.log(currency);
    option.value = currency;
    option.text = `${currency} (${data[currency].name})`;
    selectElement.appendChild(option);
  });
  console.log("populated the", selectElement.id, "input element");
};

const handleFlagChange = (ele, selector) => {
  const imgEle = document.getElementById(ele);
  const src = groupedCountries[selector.value].countries[0].flag;

  imgEle.src = src; // change image
};

// Swap the currency
const handleSwap = () => {
  [fromCurrency.value, toCurrency.value] = [
    toCurrency.value,
    fromCurrency.value,
  ];
  [fromAmt.value, toAmt.value] = [toAmt.value, fromAmt.value];

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
    showNotification("Use different currencies for conversion.");
    return;
  }

  if (!amount || amount <= 0) {
    showNotification("Please enter a valid amount.");
    return;
  }

  // convertBtn.disabled = true;
  convertBtn.textContent = "Converting...";

  try {
    console.log("Converting...");
    // Fetch data if last used Currency is not same
    if (!exchangerates || exchangerates.base_code !== from) {
      console.log("Fetching Exchange Rate");
      const response = await fetch(`${exchangerateApi}/${from}`);
      exchangerates = await response.json();
      console.log("Fetched successful");
    }
    const lastUsedCurr = Object.keys(exchangerates.conversion_rates)[0];
    console.log(lastUsedCurr);
    const convertedAmount = (
      amount * exchangerates.conversion_rates[to]
    ).toFixed(2);
    toAmt.value = convertedAmount;
    console.log("Conversion successful!");
    // showNotification("Conversion successful!");
  } catch (error) {
    console.error("Error during conversion:", error);
    showNotification("Failed to convert currency. Please try again.");
  } finally {
    // convertBtn.disabled = false;
    convertBtn.textContent = "Convert";
    console.log("Conversion operation stopped.");
    fromAmt.focus();
  }
};

// Show Notification
const showNotification = (message, duration = 3000) => {
  notification.textContent = message;
  notification.classList.remove("hidden");
  fromAmt.focus();

  setTimeout(() => {
    notification.textContent = "";
    notification.classList.add("hidden");
  }, duration);
};

// Event Listeners
convertBtn.addEventListener("click", convertCurrency);
swapBtn.addEventListener("click", handleSwap);
fromCurrency.addEventListener("change", () =>
  handleFlagChange("fromImg", fromCurrency)
);
toCurrency.addEventListener("change", () =>
  handleFlagChange("toImg", toCurrency)
);

// Initialize App
const initApp = async () => {
  container.classList.add("hidden");
  console.log("Initializing app...");
  await fetchCountriesData();
  populateDropdown(fromCurrency, groupedCountries);
  populateDropdown(toCurrency, groupedCountries);
  fromCurrency.value = DEFAULT_FROM_CURRENCY;
  toCurrency.value = DEFAULT_TO_CURRENCY;

  //Initially load the exchange rate
  // exchangerates = await fetch(`${exchangerateApi}/${DEFAULT_FROM_CURRENCY}`);
  // fromAmt.value = 1;
  // convertCurrency();

  
  fromCurrency.dispatchEvent(new Event("change"));
  toCurrency.dispatchEvent(new Event("change"));
  // console.log("Currencies loaded:", Object.keys(groupedCountries));
  container.classList.remove("hidden");
  loading.classList.add("hidden");
  fromAmt.focus();
};

// Run App
console.log("Script is running!");
initApp();
