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
Test: "It should return the price of the pizza after secondTopping is added."
Code: const pizza1 = new Pizza("bacon", "mushrooms");
Expected Output: 4
Test: "It should return the price of the pizza after adding both toppings and size."
Code: const pizza1 = new Pizza("bacon", "mushrooms", "extra-large");
Expected Output: 16


# **Ryan's Pizza Parlor**

#### By Timothy Ryan Gibson
#### _A simple web application to submit a pizza's price with toppings and size._

_Link to [pizza-parlor](https://diamondsandrust206.github.io/pizza-parlor/)_

## Technologies used

* HTML
* CSS
* VS Code
* Javascript
* jQuery
* Bootstrap

## Description

_This web application will ask you to select two toppings and the size of the pizza. You to not have to select toppings but the size of the pizza is required. It will give the total based on what toppings and size you select._

## Setup/Installation Requirements

* At https://github.com/DiamondsAndRust206/pizza-parlor copy the repository URL named "pizza-parlor". You can do this by clicking the green Code button and copy the URL from there.
* In a shell program, clone the copied repository to your desktop (git clone URL).
* Open the newly cloned directory named "pizza-parlor".
* From this directory, open index.html

## Know Bugs

* _No know bugs._

## License

[MIT](https://opensource.org/licenses/MIT)
Any problems or issues please contact ryaninlux@gmail.com

Copyright (c) _2022_ Timothy R Gibson