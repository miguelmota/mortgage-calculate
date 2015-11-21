const test = require('tape');
const mortgageCalculate = require('../mortgage-calculate');

test('flowright', function (t) {
  'use strict';

  t.plan(13);

  t.equal(mortgageCalculate(), null);
  t.equal(mortgageCalculate('foo'), null);
  t.equal(mortgageCalculate([]), null);

  const result_A = mortgageCalculate({
    loanAmount: 10000,
    APR: 5,
    termYears: 30
  });

  t.equal(result_A.loanAmount, 10000);
  t.equal(result_A.APR, 5);
  t.equal(result_A.termYears, 30);
  t.equal(result_A.monthlyPayment, 53.682162301213815);
  t.equal(result_A.totalCost, 19325.578428436973);

  var result_B = mortgageCalculate({
    APR: 5,
    termYears: 30,
    monthlyPayment: 53.682162301213815
  });

  t.equal(result_B.loanAmount, 10000);
  t.equal(result_B.APR, 5);
  t.equal(result_B.termYears, 30);
  t.equal(result_B.monthlyPayment, 53.682162301213815);
  t.equal(result_B.totalCost, 19325.578428436973);
});
