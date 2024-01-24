import { useState } from "react";
import Logo from "../../assets/Logo.png";
import NaviOptions from "./NaviOptions";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div>
      <nav
        className={`bg-darkBlue flex justify-between relative 
      `}
      >
        <div className="flex justify-center items-center ">
          <img src={Logo} className="w-16  p-4" />
          <p className="diffFont text-3xl text-orange">Foodie</p>
        </div>
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
        <NaviOptions ulStyle="hidden lg:flex pr-4 diffFont  justify-center items-center text-white [&>li]:p-2  [&>li]:cursor-pointer hover:[&>li]:text-orange [&>li]:duration-300" desktop/>
      </nav>
      <NaviOptions
        ulStyle={`diffFont text-white absolute z-30 bg-darkBlue w-full pl-4 top-[4.35rem]   [&>li]:pb-2 duration-500  overflow-hidden lg:hidden ${
          menu ? "h-52" : "h-0"
        }`}
        firstItem="pt-2"
      />
    </div>
  );
}
