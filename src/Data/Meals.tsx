import Pancakes from "../../assets/Meals/Pancakes.jpg";
import Donuts from "../../assets/Meals/Donuts.jpg";
import Plate from "../../assets/Meals/Plate.jpg";
import FruitSalad from "../../assets/Meals/FruitSalad.jpg";
import Sandwich from "../../assets/Meals/Sandwich.jpg";
import Toast from "../../assets/Meals/Toast.jpg";
import Beef from "../../assets/Meals/Beef.jpg";
import Curry from "../../assets/Meals/Curry.jpg";
import Pasta from "../../assets/Meals/Pasta.jpg";
import Pizza from "../../assets/Meals/Pizza.jpg";
import Salmon from "../../assets/Meals/Salmon.jpg";
import Sushi from "../../assets/Meals/Sushi.jpg";
import Chicken from "../../assets/Meals/Chicken.jpg";
import Lasagne from "../../assets/Meals/Lasagne.jpg";
import Ramen from "../../assets/Meals/Ramen.jpg";
import Tartar from "../../assets/Meals/Tartar.jpg";
import Tortellini from "../../assets/Meals/Tortellini.jpg";
import Turkey from "../../assets/Meals/Turkey.jpg";

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
  new Meal(Beef, "Beef", "30", "Beef, fries, salad", "L"),
  new Meal(
    Curry,
    "Curry Bowl",
    "35",
    "Chicken in curry with vegetables and rice",
    "L"
  ),
  new Meal(Pasta, "Pasta", "29", "Ravioli, tomatoes, pesto sauce", "L"),
  new Meal(Pizza, "Pizza", "40", "Many ingredients to choose from", "L"),
  new Meal(Salmon, "Salmon", "45", "Salmon, potatoes, salad", "L"),
  new Meal(Sushi, "Sushi", "60", "Fresh fish, rice, vegetables", "L"),
  new Meal(Chicken, "Stewed Chicken", "35", "Chicken in soup, vegetables", "D"),
  new Meal(Lasagne, "Lasagne", "40", "Pasta, cheese, meat", "D"),
  new Meal(Ramen, "Ramen", "37", "Soup, meat, eggs, vegetables", "D"),
  new Meal(Tartar, "Tartar", "50", "Raw meat, raw egg", "D"),
  new Meal(Tortellini, "Tortellini", "20", "Pasta, tomato sauce, lettuce", "D"),
  new Meal(Turkey, "Roasted Turkey", "60", "Turkey, broccoli, potatoes", "D"),
];

export default meals;
