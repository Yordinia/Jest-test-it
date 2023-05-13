// reverseString.js

function reverseString(string) {
    if (typeof string !== 'string') {
      const x = new TypeError('Input must be a string');
      return x;
    }
    return string.split('').reverse().join('');
  }
  
  module.exports = reverseString;
  
