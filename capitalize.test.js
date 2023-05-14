// capitalize.test.js
const capitalize = require('./capitalize.js');

test('capitalize correctly', () => {
  expect(capitalize('hello World!')).toBe('Hello World!');
  expect(capitalize(10)).toBe('');
});