const { test, expect } = require('@jest/globals');
const { delayTwoSeconds } = require('../index.js');

// This test checks that delayTwoSeconds returns a Promise that resolves after about 2 seconds.
test('delayTwoSeconds resolves after about 2 seconds', async () => {
  const start = Date.now();
  await delayTwoSeconds();
  const duration = Date.now() - start;
  expect(duration).toBeGreaterThanOrEqual(1900);
});
