class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  getItemCount() {
    return this.items.length;
  }

  getTotalBeforeTax() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.price;
    }
    return sum;
  }

  getTotalWithTax() {
    return this.getTotalBeforeTax() * 1.1;
  }

  getTax() {
    return this.getTotalWithTax() - this.getTotalBeforeTax();
  }
}

module.exports = Cart;
