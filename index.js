// Week 3 - Day 3: JavaScript – Callbacks, Promises, async/await

// 1. Callback-based function
// Implement a function that fetches data and calls the provided callback with the result.
function fetchData(callback) {
  // TODO: Use setTimeout to simulate async data fetching, then call the callback with some data.
}

// 2. Convert callback to Promise
// Implement a function that returns a Promise which resolves with data (simulate async).
function fetchDataPromise() {
  // TODO: Return a Promise that resolves with some data after a delay.
}

// 3. Promise that resolves after 2 seconds
// Implement a function that returns a Promise which resolves after 2 seconds.
function delayTwoSeconds() {
  // TODO: Return a Promise that resolves after 2 seconds.
}

// 4. Async/await API fetch simulation
// Implement an async function that simulates fetching data (use await with a Promise or setTimeout).
async function asyncFetchData() {
  // TODO: Use await to simulate an API fetch and return data.
}

// 5. Error handling with .catch and try...catch
// Implement a function that sometimes throws an error, and handle it with .catch or try...catch.
function sometimesFails(shouldFail) {
  // TODO: If shouldFail is true, throw an error; otherwise, resolve with success.
}

// Export all functions for testing
module.exports = {
  fetchData,
  fetchDataPromise,
  delayTwoSeconds,
  asyncFetchData,
  sometimesFails,
};