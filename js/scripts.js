function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  let smallCheesePizza = 10;
  this.toppings = 2;
  let medium = 3;
  let large = 5;
  this.size = [medium, large];
  
};
