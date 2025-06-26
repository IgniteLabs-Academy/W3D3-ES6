const { test, expect } = require('@jest/globals');
const { asyncFetchData } = require('../index.js');

// This test checks that asyncFetchData is an async function that returns data.
test('asyncFetchData returns data', async () => {
  const result = await asyncFetchData();
  expect(result).toBeDefined();
});
