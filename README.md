Describe: Pizza()

Test: "It should return a Pizza object with three properties for two toppings and size."

Code: const pizza1 = new Pizza("bacon", "mushrooms", "medium");

Expected Output: Pizza {
    "firstTopping": "bacon",
    "secondTopping": "mushrooms",
    "size": "medium",
}

Describe: Pizza.prototype.price()

Test: "It should return the price of the pizza after firstTopping is added."

Code: const pizza1 = new Pizza("bacon");

Expected Output: 2