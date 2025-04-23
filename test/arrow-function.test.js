const fs = require('fs');
const path = require('path');
const { test, expect } = require('@jest/globals');

test('Arrow function', () => {
  const isArrowFunction = (fn) => fn.toString().includes('=>'); const studentFunc = require('../index.js').arrowSum; expect(isArrowFunction(studentFunc)).toBe(true);
});
