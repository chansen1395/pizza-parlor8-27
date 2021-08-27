function Pizza(size) {
  this.size = size;
}

Pizza.prototype.getSizePrice = function () {
  let price = 0;
  if (this.size === "S") {
  price += 5;
  return price;
  } else if (this.size === "M") {
  price += 10;
  return price;
  } else if (this.size === "L") {
  price += 15;
  return price;
  } else {return price;}
}

const pizza = new Pizza("X");
pizza.getSizePrice();
