const fs = require('fs');
const path = require('path');
const { test, expect } = require('@jest/globals');

test('Object copy', () => {
  const copied = require('../index.js').copyObject({ a: 1, b: 2 }); expect(copied).toEqual({ a: 1, b: 2 });
});
