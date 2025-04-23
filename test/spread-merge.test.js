const fs = require('fs');
const path = require('path');
const { test, expect } = require('@jest/globals');

test('Spread merge', () => {
  const merged = require('../index.js').mergeArrays([1, 2], [3, 4]); expect(merged).toEqual([1, 2, 3, 4]);
});
