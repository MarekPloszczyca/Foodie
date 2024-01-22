import Pancakes from "../../assets/Meals/Pancakes.jpg";
import Donuts from "../../assets/Meals/Donuts.jpg";
import Plate from "../../assets/Meals/Plate.jpg";
import FruitSalad from "../../assets/Meals/FruitSalad.jpg";
import Sandwich from "../../assets/Meals/Sandwich.jpg";
import Toast from "../../assets/Meals/Toast.jpg";

class Meal {
  img: string;
  name: string;
  price: string;
  text: string;
  type: string;
  constructor(
    img: string,
    name: string,
    price: string,
    text: string,
    type: string
  ) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.text = text;
    this.type = type;
  }
}

const meals = [
  new Meal(
    Pancakes,
    "Pancakes",
    "8",
    "Maple syrup, raspberries or strawberries",
    "B"
  ),
  new Meal(Donuts, "Donuts", "7", "Sweet cream and sprinkles", "B"),
  new Meal(Plate, "Plate", "20", "Bread, cheese, juice and vegetables ", "B"),
  new Meal(
    FruitSalad,
    "Fruit Salad",
    "15",
    "Blueberries, strawberries, bananas and apples",
    "B"
  ),
  new Meal(
    Sandwich,
    "Burgwich",
    "25",
    "Burger bun, chicken, sauce, vegetables ",
    "B"
  ),
  new Meal(Toast, "Toasts", "11", "Bread, eggs, tea or coffee", "B"),
];

export default meals;
