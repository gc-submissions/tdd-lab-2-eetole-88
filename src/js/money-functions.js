const formatCurrency = (amount) => {
  if (amount >= 0) {
    const amountWDecimals = amount.toFixed(2);
    return `$${amountWDecimals}`;
  } else {
    const amountWDecimals = Math.abs(amount).toFixed(2);
    return `-$${amountWDecimals}`;
  }
};

const getCoins = (cents) => {
  let quarter = Math.floor(cents / 25);
  cents -= 25 * quarter;
  let dime = Math.floor(cents / 10);
  cents -= 10 * dime;
  let nickel = Math.floor(cents / 5);
  cents -= 5 * nickel;
  let penny = cents;
  return { quarters: quarter, dimes: dime, nickels: nickel, pennies: penny };
};

module.exports = { formatCurrency, getCoins };
