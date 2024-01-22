import MenuIcons from "./MenuIcons";
import SingleMeal from "./SingleMeal";
import SmallHeader from "./SmallHeader";
import Meals from "../Data/Meals";

const items = Meals.map((meal) => {
  return (
    <SingleMeal
      img={meal.img}
      name={meal.name}
      price={meal.price}
      text={meal.text}
      type={meal.type}
    />
  );
});

export default function MenuContainer() {
  return (
    <div className="flex flex-col items-center pt-16">
      <SmallHeader title="Food Menu" center />
      <h3 className="diffFont text-2xl pt-2">Most Popular Meals</h3>
      <MenuIcons />
      {items}
    </div>
  );
}
