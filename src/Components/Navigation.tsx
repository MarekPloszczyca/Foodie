import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import NaviOptions from "./NaviOptions";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav
        className={`bg-darkBlue flex justify-between relative 
      `}
      >
        <Link to="/">
          <div className="flex justify-center items-center ">
            <img src={Logo} className="w-16  p-4" />
            <p className="diffFont text-3xl text-orange">Foodie</p>
          </div>
        </Link>
        <button
          onClick={() => {
            menuHandler();
          }}
          className="m-4 p-2 border border-gray-800 rounded outline-none focus:border-gray-400 lg:hidden"
        >
          <div className="menuBar"></div>
          <div className="menuBar"></div>
          <div className="menuBar mb-0"></div>
        </button>
        <NaviOptions
          ulStyle="hidden lg:flex pr-4 diffFont  justify-center items-center text-white [&_li]:p-2  [&_li]:cursor-pointer hover:[&_li]:text-orange [&_li]:duration-300"
          desktop
        />
      </nav>
      <NaviOptions
        ulStyle={`diffFont text-white absolute z-30 bg-darkBlue w-full pl-4 top-[4.35rem]   [&_li]:pb-2 duration-500  overflow-hidden lg:hidden ${
          menu ? "h-44" : "h-0"
        }`}
        firstItem="pt-2"
      />
    </div>
  );
}
