import {
  faMugHot,
  faBurger,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "./MenuIcon";

export default function Menu() {
  return (
    <div className="max-[319px]:flex max-[319px]:flex-col p-4 pt-8 w-11/12 grid grid-cols-2 gap-2 justify-center items-center justify-items-center border-b-2 mb-8 md:flex md:justify-evenly">
      <MenuIcon icon={faMugHot} firstWord="Popular" secondWord="Breakfast" />
      <MenuIcon icon={faBurger} firstWord="Special" secondWord="Launch" />
      <div className="col-start-1 col-end-3">
        <MenuIcon icon={faUtensils} firstWord="Lovely" secondWord="Dinner" />
      </div>
    </div>
  );
}
