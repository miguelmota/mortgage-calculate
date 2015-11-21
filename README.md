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

```javascript
const mortgageCalculate = require('mortgage-calculate');

const result = mortgageCalculate({
  loanAmount: 10000,
  APR: 5,
  termYears: 30
});

console.log(result);
/*
{
  loanAmount: 10000,
  totalCost: 19325.578428436973,
  monthlyPayment: 53.682162301213815,
  APR: 5,
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
