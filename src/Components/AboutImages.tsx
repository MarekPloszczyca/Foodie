import AboutOne from "../../assets/AboutOne.jpg";
import AboutTwo from "../../assets/AboutTwo.jpg";
import AboutThree from "../../assets/AboutThree.jpg";
import AboutFour from "../../assets/AboutFour.jpg";
import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

export default function AboutImages() {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <div ref={item} className="centered">
      <div className="grid grid-cols-2 gap-4 p-4 pt-20 max-w-tablet lg:p-2">
        <img
          src={AboutOne}
          className={`${display ? "animate-imgDisplay" : ""} opacity-0`}
        />
        <img
          src={AboutTwo}
          className={`w-2/3 self-end ${
            display ? "animate-imgDisplay" : ""
          } opacity-0`}
          style={{ animationDelay: "300ms" }}
        />
        <img
          src={AboutThree}
          className={`w-2/3 self-start justify-self-end ${display ? "animate-imgDisplay" : ""} opacity-0`}
          style={{ animationDelay: "600ms" }}
        />
        <img
          src={AboutFour}
          className={`${display ? "animate-imgDisplay" : ""} opacity-0`}
          style={{ animationDelay: "900ms" }}
        />
      </div>
    </div>
  );
}
