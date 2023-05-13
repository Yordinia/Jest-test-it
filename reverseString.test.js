// reverseString-test.js
const reverseString = require('./reverseString');

test('String is reversed correctly', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString(true)).toThrow(TypeError);

});
