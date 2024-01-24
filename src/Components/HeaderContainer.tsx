import { Link } from "react-router-dom";
import Image from "../../assets/HomeImage.png";
import PageHeaderBackground from "../Models/PageHeaderBackground";

export default function HeaderContainer() {
  return (
    <PageHeaderBackground>
      <div className="max-w-xl lg:pr-4 animate-fromLeft">
        <h1 className="diffFont text-4xl pb-2 lg:text-6xl">
          Enjoy Our Delicious Meals
        </h1>
        <p className="lg:text-lg lg:text-justify">
          Embrace a culinary adventure at our restaurant, where every dish is a
          journey of flavors meticulously crafted to delight your palate. Join
          us in an ambiance of warmth and sophistication, where our attentive
          staff awaits to elevate your dining experience.
        </p>
        <Link to="/reservation">
          <button className="diffFont bg-orange p-2 mt-4 rounded lg:text-lg lg:hover:brightness-110 duration-500">
            BOOK A TABLE
          </button>
        </Link>
      </div>
      <img
        className="w-10/12 max-w-md animate-spin-slow relative top-12 lg:top-0"
        src={Image}
      />
    </PageHeaderBackground>
  );
}
