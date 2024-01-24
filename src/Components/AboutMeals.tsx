import MealsDescription from "./MealDescription";
import Pasta from "../../assets/Meals/Pasta.jpg";
import Meat from "../../assets/Meals/Beef.jpg";
import Fish from "../../assets/Meals/Salmon.jpg";
import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

export default function AboutMeals() {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <div className="centered">
      <div className="flex flex-col items-center [&_p]:px-4 [&_h3]:px-4 [&_h6]:px-4 py-8  [&_p]:pt-8 md:max-w-tablet lg:max-w-desktop">
        <div
          ref={item}
          className={`${display ? "animate-fromBottom" : ""} opacity-0`}
        >
          <h3 className="diffFont text-4xl">Many Delicious Meals</h3>
          <p className="text-gray-600">
            Indulge your senses in a culinary journey like no other at our
            exquisite dining establishment. Our menu is a symphony of flavors
            meticulously crafted to tantalize your taste buds and leave you
            craving for more. From the first bite to the last, each dish is a
            celebration of freshness, quality ingredients, and culinary
            expertise.
          </p>
          <p className="pb-4 text-gray-600">
            As you dine in our welcoming ambiance, the attention to detail in
            every aspect of your experience will not go unnoticed. Our
            commitment to providing an unforgettable dining experience extends
            beyond the plate, ensuring that your time with us is a celebration
            of good food, good company, and the joy of savoring life's delicious
            moments.
          </p>
        </div>
        <div className="md:flex ">
          <MealsDescription
            title="Pasta"
            image={Pasta}
            text="Immerse yourself in a world of pasta perfection as we bring the finest
          Italian tradition to your plate. Our pasta dishes are a symphony of
          flavors, where al dente textures meet luscious sauces, creating an
          unforgettable culinary experience. Elevate your pasta experience with
          our artisanal creations, where handcrafted noodles meet innovative
          sauces for a delightful fusion of tradition and creativity. "
          />

          <MealsDescription
            title="Meat"
            image={Meat}
            text="
                Savor the succulence of our carefully selected meats, expertly prepared to perfection. From the melt-in-your-mouth tenderness of our slow-cooked braised short ribs to the bold and robust flavors of our perfectly grilled steaks, our commitment to quality shines through in every savory bite. Whether you're a carnivore connoisseur seeking the boldness of a prime ribeye or a fan of slow-cooked delicacies like our tender lamb shanks."
          />

          <MealsDescription
            title="Fish"
            image={Fish}
            text="Dive into a sea of exquisite flavors with our thoughtfully crafted fish dishes, where freshness meets culinary finesse. Our seafood selection is a testament to the ocean's bounty, showcasing a symphony of tastes from delicate fillets to robust catches. Indulge in the buttery perfection of our pan-seared sea bass or relish the zesty notes of our citrus-infused grilled salmon, each dish a testament to our dedication to capturing the essence of the sea. "
          />
        </div>
      </div>
    </div>
  );
}
