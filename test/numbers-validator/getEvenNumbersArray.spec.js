const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return only even numbers from the provided array', () => {
      const result = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(result).to.deep.equal([2, 4, 6, 8]);
    });
  });

  it('should return an empty array when there are no even numbers', () => {
    const result = validator.getEvenNumbersFromArray([1, 3, 5, 7, 9]);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when given an empty array', () => {
    const result = validator.getEvenNumbersFromArray([]);
    expect(result).to.deep.equal([]);
  });

  describe('negative tests', () => {
    it('should throw an error when provided a non-array', () => {
      const input = 'four';
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`${input} is not an array of "Numbers"`);
    });

    it('should throw an error when the array contains a non-number', () => {
      const input = [1, 2, 'three', 4];
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`${input} is not an array of "Numbers"`);
    });
  });
});
