import { useState } from "react";
import Logo from "../../assets/Logo.png";

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
          onClick={menuHandler}
          className="m-4 p-2 border border-gray-800 rounded"
        >
          <div className="menuBar"></div>
          <div className="menuBar"></div>
          <div className="menuBar mb-0"></div>
        </button>
      </nav>
      <ul
        className={`diffFont text-white absolute z-30 bg-darkBlue w-full pl-4 top-[4.35rem]   [&>li]:pb-2 h-0  overflow-hidden ${
          menu ? "animate-menu" : "animate-menuClose"
        }`}
      >
        <li className="pt-2">HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATION</li>
        <li>OUR TEAM</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}
