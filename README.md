# mortgage-calculate

> Calculate mortgage payments.

# Install

```bash
npm install mortgage-calculate
```

```bash
bower install mortgage-calculate
```

# Usage

Calculate monthly payment

```javascript
const mortgageCalculate = require('mortgage-calculate');

const result = mortgageCalculate({
  loanAmount: 100000,
  APR: 4.7,
  termYears: 30
});

console.log(result);
/*
{
  loanAmount: 10000,
  totalCost: 186709.61139815467,
  monthlyPayment: 518.6378094393185,
  APR: 4.7,
  termYears: 30
}
*/
```

Calculate max loan amount

```javascript
const result = mortgageCalculate({
  monthlyPayment: 500,
  APR: 4.7,
  termYears: 30
});

console.log(result);
/*
{
  loanAmount: 96406.3920716719,
  totalCost: 180000,
  monthlyPayment: 500,
  APR: 4.7,
  termYears: 30
}
*/
```

# Test

```bash
npm test
```

# License

MIT
