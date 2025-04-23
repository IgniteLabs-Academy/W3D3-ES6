const fs = require('fs');
const path = require('path');
const { test, expect } = require('@jest/globals');

test('Array destructuring', () => {
  const result = require('../index.js').getSecondElement([10, 20, 30]); expect(result).toBe(20);
});
