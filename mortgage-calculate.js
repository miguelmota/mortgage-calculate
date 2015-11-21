(function(root) {
  'use strict';

  function mortgageCalculate(data) {
    if (!(typeof data === 'object' && data.constructor === Object)) {
      return null;
    }

    var loanAmount = data.loanAmount;
    var APR = data.APR;
    var termYears = data.termYears;
    var monthlyPayment = data.monthlyPayment;

    var monthlyRate = APR / (12 * 100);
    var termMonths = termYears * 12;

    var mortgage = (monthlyRate / (1 - Math.pow(1 + monthlyRate, -termMonths)));

    if (typeof monthlyPayment === 'undefined') {
      monthlyPayment = loanAmount * mortgage;
    } else {
      loanAmount = monthlyPayment / mortgage;
    }

    return {
      loanAmount: loanAmount,
      totalCost: (monthlyPayment * termMonths),
      monthlyPayment: monthlyPayment,
      APR: APR,
      termYears: termYears
    };
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = mortgageCalculate;
    }
    exports.mortgageCalculate = mortgageCalculate;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return mortgageCalculate;
    });
  } else {
    root.mortgageCalculate = mortgageCalculate;
  }

})(this);
