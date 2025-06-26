const { test, expect } = require('@jest/globals');
const { sometimesFails } = require('../index.js');

// This test checks that sometimesFails returns a Promise that resolves or rejects based on input.
test('sometimesFails resolves or rejects as expected', async () => {
  await expect(sometimesFails(false)).resolves.toBeDefined();
  await expect(sometimesFails(true)).rejects.toBeDefined();
});
