import Company from "./Company";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Opening from "./Opening";
import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

export default function Footer() {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <footer
      ref={item}
      className={`bg-darkBlue p-4 pt-12 md:grid md:grid-cols-2 md:p-8 md:items-baseline xl:grid-cols-4 opacity-0 ${
        display ? "animate-footerDisplay" : ""
      }`}
    >
      <Company />
      <Contact />
      <Opening />
      <Newsletter />
    </footer>
  );
}
