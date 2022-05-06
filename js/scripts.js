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
  return price;
};