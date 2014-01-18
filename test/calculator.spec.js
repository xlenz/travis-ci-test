'use strict';
/*jshint expr: true*/

var should = require('should');
var calculator = require('../src/calculator');

describe('calculator spec', function () {
  it('calculator object exist', function () {
    should(calculator).be.ok;
  });

  it('returns 0 for empty string', function () {
    should(calculator.add('')).equal(0);
  });

  it('returns 0 for 0, 1 for 1, 2 for 2', function () {
    should(calculator.add('0')).equal(0);
    should(calculator.add('1')).equal(1);
    should(calculator.add('2')).equal(2);
  });

  it('returns 3 for 1, 2', function () {
    should(calculator.add('1,2')).equal(3);
  });

  it('returns 7 for 3, 4', function () {
    should(calculator.add('3,4')).equal(7);
  });

  it('returns 15 for 1,2,3,4,5', function () {
    should(calculator.add('1,2,3,4,5')).equal(15);
  });

  it('return 20 for 2,5,6,7', function () {
    should(calculator.add('2,5,6,7')).equal(20);
  });

  it('return 6 for 1\n2,3', function () {
    should(calculator.add('1\n2,3')).equal(6);
  });

  it('return 6 for 1 2 3 separated with new lines', function () {
    should(calculator.add('1\n2\n3')).equal(6);
  });

  it('delimeters', function () {
    should(calculator.add('//;\n1;2')).equal(4); //3
  });

  it('negative numbers', function () {
    (function () {
      return calculator.add('1,2,-3');
    }).should.
    throw ('negative is not allowed');
  });

});
