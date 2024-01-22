import {
  faMugHot,
  faBurger,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "./MenuIcon";


export default function MenuIcons() {
  return (
    <div className="max-[319px]:flex max-[319px]:flex-col max-[319px]:items-stretch
    max-[319px]:flex-wrap max-[319px]:content-center p-4 pt-8 w-11/12 grid grid-cols-2 gap-2 justify-center items-center justify-items-center border-b-2 mb-8 md:flex md:justify-evenly">
      <MenuIcon icon={faMugHot} firstWord="Popular" secondWord="Breakfast" />
      <MenuIcon icon={faBurger} firstWord="Special" secondWord="Lunch" />
      <div className="col-start-1 col-end-3">
        <MenuIcon icon={faUtensils} firstWord="Lovely" secondWord="Dinner" />
      </div>
    </div>
  );
}
