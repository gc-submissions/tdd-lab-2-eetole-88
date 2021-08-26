const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart class", () => {
  test("constructor sets items to an empty array", () => {
    const ncrt = new Cart();
    expect(ncrt.items).toEqual([]);
  });
  test("calling add() once adds one product to array", () => {
    const product = new Product("apples", 3, false);
    const ncrt = new Cart();
    ncrt.add(product);
    expect(ncrt.items).toEqual([product]);
  });
  test("calling add() twice adds two products to array", () => {
    const product = new Product("apples", 3, false);
    const product2 = new Product("oranges", 4, false);
    const ncrt = new Cart();
    ncrt.add(product);
    ncrt.add(product2);
    expect(ncrt.items).toEqual([product, product2]);
  });
  test("when items are added to array, return length of array", () => {
    const product = new Product("apples", 3, false);
    const product2 = new Product("oranges", 4, false);
    const product3 = new Product("bananas", 2, false);
    const ncrt = new Cart();
    ncrt.add(product);
    ncrt.add(product2);
    ncrt.add(product3);
    const count = ncrt.getItemCount();
    expect(count).toBe(3);
  });
  test("when items are added to array, return length of array", () => {
    const product2 = new Product("oranges", 4, false);
    const product3 = new Product("bananas", 2, false);
    const ncrt = new Cart();
    ncrt.add(product2);
    ncrt.add(product3);
    const count = ncrt.getItemCount();
    expect(count).toBe(2);
  });
  test("getTotalBeforeTax() returns sum of the price of the products in array", () => {
    const product = new Product("apples", 3, false);
    const ncrt = new Cart();
    ncrt.add(product);
    const total = ncrt.getTotalBeforeTax();
    expect(total).toBe(3);
  });
  test("getTotalWithTax() returns sum of getPriceWithTax()", () => {
    const product = new Product("apples", 3, true);
    const product2 = new Product("oranges", 4, true);
    const ncrt = new Cart();
    ncrt.add(product);
    ncrt.add(product2);
    const total = ncrt.getTotalWithTax();
    expect(total).toBeCloseTo(7.7);
  });
  test("getTax() returns difference between getTotalWithTax() and getTotalBeforeTax()", () => {
    const product2 = new Product("oranges", 4, true);
    const product3 = new Product("bananas", 2, true);
    const ncrt = new Cart();
    ncrt.add(product2);
    ncrt.add(product3);
    const difference = ncrt.getTax();
    expect(difference).toBeCloseTo(0.6);
  });
});
