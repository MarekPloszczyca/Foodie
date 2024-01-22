/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuIcons from "./MenuIcons";
import SingleMeal from "./SingleMeal";
import SmallHeader from "./SmallHeader";
import Meals from "../Data/Meals";
import { useEffect, useState, useReducer, ReactNode } from "react";

const mealTypeHandler = (state: any, action: { type: string }) => {
  switch (action.type) {
    case "B": {
      return {
        ...state,
        breakfast: true,
        lunch: false,
        dinner: false,
      };
    }
    case "L": {
      return { ...state, breakfast: false, lunch: true, dinner: false };
    }
    case "D": {
      return { ...state, breakfast: false, lunch: false, dinner: true };
    }
  }
};

export default function MenuContainer() {
  const [meals, setMeals] = useState<ReactNode[]>([]);
  const [type, dispatch] = useReducer(mealTypeHandler, {
    breakfast: true,
    lunch: false,
    dinner: false,
  });

  useEffect(() => {
    let newArray: {
      type: string;
      name: string;
      img: string;
      price: string;
      text: string;
    }[] = [];
    if (type?.breakfast) {
      newArray = Meals.filter((meal) => {
        return meal.type === "B";
      });
    }
    if (type?.dinner) {
      newArray = Meals.filter((meal) => {
        return meal.type === "D";
      });
    }
    if (type?.lunch) {
      newArray = Meals.filter((meal) => {
        return meal.type === "L";
      });
    }
    const newMeals = newArray.map((item) => {
      return (
        <SingleMeal
          key={item.name}
          img={item.img}
          name={item.name}
          price={item.price}
          text={item.text}
        />
      );
    });
    setMeals(newMeals);
  }, [type]);

  return (
    <div className="flex flex-col items-center pt-16">
      <SmallHeader title="Food Menu" center />
      <h3 className="diffFont text-2xl pt-2">Most Popular Meals</h3>
      <MenuIcons mealsHandler={dispatch} />
      {meals}
    </div>
  );
}
