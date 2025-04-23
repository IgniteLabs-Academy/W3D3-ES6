const fs = require('fs');
const path = require('path');
const { test, expect } = require('@jest/globals');

test('Object destructuring', () => {
  const result = require('../index.js').getFullName({ firstName: 'Jane', lastName: 'Doe' }); expect(result).toBe('Jane Doe');
});
