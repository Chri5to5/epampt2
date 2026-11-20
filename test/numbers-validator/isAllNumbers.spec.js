const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true when all elements in the array are numbers', () => {
      const result = validator.isAllNumbers([1, 2, 3, 4, 5]);
      expect(result).to.be.equal(true);
    });

    it('should return true when the array is empty', () => {
      const result = validator.isAllNumbers([]);
      expect(result).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false when the array contains a non-number', () => {
      const result = validator.isAllNumbers([1, 2, 'three', 4]);
      expect(result).to.be.equal(false);
    });

    it('should throw an error when provided a non-array', () => {
      const input = 'not an array';
      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`${input} is not an array`);
    });
  });
});
