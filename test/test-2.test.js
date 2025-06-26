const { test, expect } = require('@jest/globals');
const { fetchDataPromise } = require('../index.js');

// This test checks that fetchDataPromise is a function that returns a Promise resolving with data.
test('fetchDataPromise returns a Promise that resolves with data', async () => {
  const result = await fetchDataPromise();
  expect(result).toBeDefined();
});
