import { useEffect, useState, useRef } from "react";
import SmallHeader from "./SmallHeader";
import useDisplay from "../Hooks/useDisplay";

export default function AboutDescription(props: { more?: boolean }) {
  const [experiance, setExperiance] = useState(0);
  const [chefs, setChefs] = useState(0);
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  useEffect(() => {
    if (display) {
      const expInterval = setInterval(() => {
        setExperiance((current) => current + 1);
      }, 200);
      if (experiance >= 11) {
        return clearInterval(expInterval);
      }
      return () => {
        clearInterval(expInterval);
      };
    }
  }, [experiance, display]);

  useEffect(() => {
    if (display) {
      const chefsInterval = setInterval(() => {
        setChefs((current) => current + 1);
      }, 90);
      if (chefs >= 23) {
        return clearInterval(chefsInterval);
      }
      return () => {
        clearInterval(chefsInterval);
      };
    }
  }, [chefs, display]);

  return (
    <div ref={item} className="centered lg:pr-4">
      <div className="p-4 pt-12 max-w-tablet lg:pl-8 lg:p-1">
        <SmallHeader title="About Us" />
        <h3 className="diffFont text-4xl pt-4">Welcome to Foodie</h3>
        <p className="pt-8 text-gray-600">
          Our restaurant boasts a warm and inviting ambiance that sets the
          perfect stage for an unforgettable dining experience. The contemporary
          decor, combined with subtle lighting, creates a cozy atmosphere that
          complements the culinary delights we have to offer.
        </p>
        <p className="pt-8 text-gray-600">
          At our restaurant, we take pride in sourcing only the finest, freshest
          ingredients to craft a menu that caters to diverse palates. From
          succulent meats and seafood to vibrant vegetarian options, our chefs
          skillfully prepare each dish to tantalize your taste buds.
        </p>
        <div className="lg:flex  lg:justify-between">
          <div className="flex items-center pt-2 mt-8 border-l-4 border-orange">
            <div className="diffFont text-orange text-4xl pl-4 pr-8 lg:text-5xl w-20 lg:w-24 ">
              {experiance}
            </div>
            <div className="flex flex-col">
              Year of <span className="diffFont">EXPERIENCE</span>
            </div>
          </div>
          <div className="flex items-center pt-2 mt-8 border-l-4 border-orange">
            <div className="diffFont text-orange text-4xl pl-4 pr-8 lg:text-5xl w-20 lg:w-24 ">
              {chefs}
            </div>
            <div className="flex flex-col">
              Popular <span className="diffFont">MASTER CHEFS</span>
            </div>
          </div>
        </div>
        {props.more && (
          <button className="diffFont bg-orange text-white  p-4 pl-10 pr-10 mt-8 lg:hover:brightness-110 duration-500">
            READ MORE
          </button>
        )}
      </div>
    </div>
  );
}
