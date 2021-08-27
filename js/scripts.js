function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


Pizza.prototype.getSizePrice = function () {
  sizePrice = 0
  if (this.size === "S") {
  sizePrice = 5;
  } else if (this.size === "M") {
    sizePrice = 10;
  } else if (this.size === "L") {
    sizePrice = 15;
  } else {}
  return sizePrice;
}

Pizza.prototype.getToppingsPrice = function () {
  toppingsPrice = 0
  if (this.toppings.includes("cheese")) {
    toppingsPrice += 1.5;
  }
  if (this.toppings.includes("pepperoni")) {
    toppingsPrice += 3;
  }
  if (this.toppings.includes("ravioli")) {
    toppingsPrice += 5;
  }
  if (this.toppings.includes("mushrooms")) {
    toppingsPrice += 1;
  }
  return toppingsPrice;

}

// const pizza = new Pizza("M", toppings);
var totalPrice = 0

// totalPrice += pizza.getSizePrice();
// totalPrice += pizza.getToppingsPrice();
// totalPrice;

function displayPrice(newPizza) {
  totalPrice = newPizza.getSizePrice() + newPizza.getToppingsPrice();
  $(".size-price").html(newPizza.getSizePrice());
  $(".toppings-price").html(newPizza.getToppingsPrice());
  $(".total-price").html(totalPrice);
}

$(document).ready(function () {
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    var toppings = [];
    var inputtedSize = $("select#size").val();
    $("input:checkbox[name=checkbox]:checked").each(function() {
      toppings.push($(this).val())
    });
    console.log("Toppings selected: " + toppings);
    var newPizza = new Pizza(inputtedSize, toppings);
    displayPrice(newPizza);
  });
});