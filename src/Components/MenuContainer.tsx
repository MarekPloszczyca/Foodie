/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuIcons from "./MenuIcons";
import SingleMeal from "./SingleMeal";
import SmallHeader from "./SmallHeader";
import Meals from "../Data/Meals";
import { useEffect, useState, useReducer, ReactNode, useRef } from "react";
import useDisplay from "../Hooks/useDisplay";

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
  const [change, setChange] = useState(false);
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

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

  const mealsHandler = (type: any) => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
      dispatch(type);
    }, 300);
  };

  return (
    <div className="centered ">
      <div
        ref={item}
        className="flex flex-col items-center pt-16 w-full max-w-tablet lg:max-w-desktop"
      >
        <div
          className={`${display ? "animate-fromBottom" : ""} opacity-0`}
          style={{ animationDelay: "500ms" }}
        >
          <SmallHeader title="Food Menu" center />
          <h3 className="diffFont text-2xl pt-2">Most Popular Meals</h3>
        </div>
        <div
          className={`w-full centered flex-col opacity-0 ${
            display ? "animate-fromBottom" : ""
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <MenuIcons
            mealsHandler={mealsHandler}
            breakfast={type.breakfast}
            dinner={type.dinner}
            lunch={type.lunch}
          />
          <div
            className={`${
              change ? "opacity-0" : ""
            } w-full opacity-1 lg:grid lg:grid-cols-2 lg:h-96 duration-300`}
          >
            {meals}
          </div>
        </div>
      </div>
    </div>
  );
}
