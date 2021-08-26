const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Given the amount 0, it returns '$0.00'", () => {
    const actual = formatCurrency(0);
    expect(actual).toBe("$0.00");
  });
  test("Given the amount 1, it returns $1.00", () => {
    const actual = formatCurrency(1);
    expect(actual).toBe("$1.00");
  });
  test("Given the amount 1.5 it returns $1.50.", () => {
    const actual = formatCurrency(1.5);
    expect(actual).toBe("$1.50");
  });
  test("Given the amount 0.01, it returns $0.01", () => {
    const actual = formatCurrency(0.01);
    expect(actual).toBe("$0.01");
  });
  test("Given the amount 527.6789, it returns $527.68", () => {
    const actual = formatCurrency(527.6789);
    expect(actual).toBe("$527.68");
  });
  test("Given the amount -1, it returns -$1.00", () => {
    const actual = formatCurrency(-1);
    expect(actual).toBe("-$1.00");
  });
  test("Given the amount -5.5, it returns -$5.50", () => {
    const actual = formatCurrency(-5.5);
    expect(actual).toBe("-$5.50");
  });
  test("Given the amount 2.3456, it returns $2.35", () => {
    const actual = formatCurrency(2.3456);
    expect(actual).toBe("$2.35");
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
    const change = getCoins(32);
    expect(change).toEqual({ dimes: 0, nickels: 1, pennies: 2, quarters: 1 });
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", () => {
    const change = getCoins(10);
    expect(change).toEqual({ dimes: 1, nickels: 0, pennies: 0, quarters: 0 });
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", () => {
    const change = getCoins(27);
    expect(change).toEqual({ dimes: 0, nickels: 0, pennies: 2, quarters: 1 });
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.", () => {
    const change = getCoins(68);
    expect(change).toEqual({ dimes: 1, nickels: 1, pennies: 3, quarters: 2 });
  });
});
