export default class CartItem {
  constructor({
    name = '',
    toppings = [],
    prices = { small: -1, medium: -1, large: -1 },
  }) {
    this.name = name;
    this.toppings = toppings;
    this.prices = prices;
  }
}
