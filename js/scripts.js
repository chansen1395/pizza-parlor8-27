// ******************************* //
// Business Logic for Pizza Parlor //
// ******************************* //

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// Determine price addition based on size //
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

// Determine price addition based on topping selections //
Pizza.prototype.getToppingsPrice = function () {
  toppingsPrice = 0
  if (this.toppings.includes("cheese")) {
    toppingsPrice += 1.5;
  }
  if (this.toppings.includes("pepperoni")) {
    toppingsPrice += 3;
  }
  if (this.toppings.includes("ravioli")) {
    toppingsPrice += 6;
  }
  if (this.toppings.includes("mushrooms")) {
    toppingsPrice += 1;
  }
  return toppingsPrice;

}


// ************************* //
// UI Logic for Pizza Parlor //
// ************************* //

// Display the price to the user //
function displayPrice(newPizza) {
  $("#show-price").show();
  totalPrice = newPizza.getSizePrice() + newPizza.getToppingsPrice();
  $(".size-price").html("$" + newPizza.getSizePrice().toFixed(2));
  $(".toppings-price").html("$" + newPizza.getToppingsPrice().toFixed(2));
  $(".total-price").html("$" + totalPrice.toFixed(2));
}

$(document).ready(function () {
  $("#show-price").hide();
  $("#ravioli-ravioli").click(function(event) {
    event.preventDefault();
    window.open("https://www.youtube.com/watch?v=NWoyTD27kFs");
  });
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
    $(".btn-warning").click(function () {
      location.reload();
    });
  });
});