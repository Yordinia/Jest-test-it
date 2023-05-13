const reverseString = require('./string-length.js')
test('Display string length b/n 1 and 10', () => {
    expect(reverseString("1, 2")).toBe(4);
    expect(reverseString("            ")).toEqual(new Error('This is a BAAAD error'));
    expect(reverseString(" mylvlygirl")).toBe(10);
  });