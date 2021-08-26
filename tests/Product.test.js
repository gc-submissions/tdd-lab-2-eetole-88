const Product = require("../src/js/Product");

describe("Product", () => {
  test("constructor sets properties of name, price, taxable as parameters", () => {
    const np = new Product("apple", 2, false);
    expect(np.name).toBe("apple");
    expect(np.price).toBe(2);
    expect(np.taxable).toBe(false);
  });
  test("constructor sets properties of name, price, taxable as parameters", () => {
    const np = new Product("orange", 3, false);
    expect(np.name).toBe("orange");
    expect(np.price).toBe(3);
    expect(np.taxable).toBe(false);
  });
  test("applies tax, returns price * 1.10", () => {
    //tax tests are failing
    const np = new Product("orange", 3, true);
    expect(np.getPriceWithTax()).toBeCloseTo(3.3, 4);
  });
  test("applies tax, returns price * 1.10", () => {
    const np = new Product("lemon", 2.5, true);
    expect(np.getPriceWithTax()).toBeCloseTo(2.75, 4);
  });
  test("does not apply tax, returns price", () => {
    const np = new Product("grapefruit", 4, false);
    expect(np.name).toBe("grapefruit");
    expect(np.price).toBe(4);
    expect(np.taxable).toBe(false);
  });
  test("does not apply tax, returns price", () => {
    const np = new Product("strawberries", 1.75, false);
    expect(np.name).toBe("strawberries");
    expect(np.price).toBeCloseTo(1.75);
    expect(np.taxable).toBe(false);
  });
});
