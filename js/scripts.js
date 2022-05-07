function Pizza(firstTopping, secondTopping, size) {
  this.firstTopping = firstTopping;
  this.secondTopping = secondTopping;
  this.size = size;
}

Pizza.prototype.price = function() {
  let firstTopping = this.firstTopping;
  let secondTopping = this.secondTopping;
  let size = this.size;
  let price = 0;

  if (firstTopping === "pepperoni" || firstTopping === "sausage" || firstTopping === "bacon") {
    price += 2;
  } else {
    price += 0;
  }
  if (secondTopping === "pepperoncini" || secondTopping === "mushrooms" || secondTopping === "spinach") {
    price += 2;
  } else {
    price += 0;
  }
  
  if (size === "extra-large") {
    price += 12;
  } else if (size === "large") {
    price += 10;
  } else if (size === "medium") {
    price += 8;
  } else if (size === "small") {
    price += 6;
  } else {
    price += 0;
  }
  return price;
};

$(document).ready(function() {
  $("form#customer-input").submit(function(event) {
    event.preventDefault();

    const inputFirstTopping = $("#meat-toppings").val();
    const inputSecondTopping = $("#veggie-toppings").val();
    const inputSize = $("#size").val();
    let newOrder = new Pizza(inputFirstTopping, inputSecondTopping, inputSize)
    let showOrder = newOrder.price();

    $("#output").text("$" + showOrder);
  });
});