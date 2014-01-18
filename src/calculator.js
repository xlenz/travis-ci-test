'use strict';

var Calculator = {
  add: function (str) {
    if (str === '') {
      return 0;
    }
    var re = /\n|,/;

    if (str.indexOf('//') === 0) {
      var delim = str.substr(2, 1);
      re = new RegExp(delim);
      str = str.substr(4);
    }

    var arr = str.split(re);
    var integers = arr.map(function (val) {
      return parseInt(val, 10);
    });

    var sum = integers.reduce(function (prev, val) {
      if (val < 0) {
        throw new Error('negative is not allowed');
      }
      return prev + val;
    });

    return sum;
  }
};

module.exports = Calculator;
