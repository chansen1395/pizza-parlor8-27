function Pizza(size) {
  this.size = size;
}

let price = 0;
Pizza.prototype.getSizePrice = function () {
  if (this.size === "S") {
  price += 5;
  return price;
  }
}

const pizza = new Pizza("S");
pizza.getSizePrice();
