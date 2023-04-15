// calculator.test.js

const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('Adds two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('Adds negative numbers correctly', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('Adds decimals correctly', () => {
      expect(calculator.add(2.5, 3.5)).toBe(6);
    });
  });

  describe('subtract', () => {
    test('Subtracts two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('Subtracts negative numbers correctly', () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });

    test('Subtracts decimals correctly', () => {
      expect(calculator.subtract(5.5, 3.5)).toBe(2);
    });
  });

  describe('divide', () => {
    test('Divides two numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('Throws error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });

    test('Divides negative numbers correctly', () => {
      expect(calculator.divide(-6, -2)).toBe(3);
    });
  });

  describe('multiply', () => {
    test('Multiplies two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('Multiplies negative numbers correctly', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('Multiplies decimals correctly', () => {
      expect(calculator.multiply(2.5, 3)).toBe(7.5);
    });
  });
});
