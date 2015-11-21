const test = require('tape');
const mortgageCalculate = require('../mortgage-calculate');

test('mortgage', function (t) {
  'use strict';

  t.plan(23);

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

  const result_C = mortgageCalculate({
    loanAmount: 100000,
    APR: 4.7,
    termYears: 30
  });

  t.equal(result_C.loanAmount, 100000);
  t.equal(result_C.APR, 4.7);
  t.equal(result_C.termYears, 30);
  t.equal(result_C.monthlyPayment, 518.6378094393185);
  t.equal(result_C.totalCost, 186709.61139815467);

  const result_D = mortgageCalculate({
    monthlyPayment: 500,
    APR: 4.7,
    termYears: 30
  });

  t.equal(result_D.loanAmount, 96406.3920716719);
  t.equal(result_D.APR, 4.7);
  t.equal(result_D.termYears, 30);
  t.equal(result_D.monthlyPayment, 500);
  t.equal(result_D.totalCost, 180000);
});
