class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    for (let topping of this.toppings) {
      price += topping.price;
    }
    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    for (let topping of this.toppings) {
      calories += topping.calories;
    }
    return calories;
  }
}

const SIZE_SMALL = {
  name: "Small",
  price: 50,
  calories: 20,
};

const SIZE_LARGE = {
  name: "Large",
  price: 100,
  calories: 40,
};

const STUFFING_CHEESE = {
  name: "Cheese",
  price: 10,
  calories: 20,
};

const STUFFING_SALAD = {
  name: "Salad",
  price: 20,
  calories: 5,
};

const STUFFING_POTATO = {
  name: "Potato",
  price: 15,
  calories: 10,
};

const TOPPING_SPICE = {
  name: "Spice",
  price: 15,
  calories: 0,
};

const TOPPING_MAYO = {
  name: "Mayo",
  price: 20,
  calories: 5,
};

// приклад
const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addTopping(TOPPING_SPICE);
hamburger.addTopping(TOPPING_MAYO);
console.log(hamburger.calculatePrice()); // 75
console.log(hamburger.calculateCalories()); // 45
