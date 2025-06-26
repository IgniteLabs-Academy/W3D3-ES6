const { test, expect } = require('@jest/globals');
const { fetchData } = require('../index.js');

// This test checks that fetchData is a function that accepts a callback and calls it with data asynchronously.
test('fetchData calls the callback with data', (done) => {
  function cb(err, data) {
    expect(err).toBeUndefined();
    expect(data).toBeDefined();
    done();
  }
  fetchData(cb);
});
