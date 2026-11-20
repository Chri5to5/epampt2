const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true when provided an integer', () => {
      const validationResults = validator.isInteger(4);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false when provided a non-integer number', () => {
      const validationResults = validator.isInteger(3.14);
      expect(validationResults).to.be.equal(false);
    });
  });

  it('should throw an error when provided a non-number', () => {
    const input = 'four';
    expect(() => {
      validator.isInteger(input);
    }).to.throw(`${input} is not a number`);
  });
});
