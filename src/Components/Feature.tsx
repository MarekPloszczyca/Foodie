import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  delay?: number;
}

export default function Feature(props: Props) {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <div
      ref={item}
      className={`p-4 m-4 mb-8 md:mb-4 opacity-0  bg-white lg:hover:bg-orange duration-500  lg:[&_*]:hover:text-white ${
        display ? `animate-fromBottom ` : ""
      }`} style={{animationDelay: `${props.delay}ms`}}
    >
      {props.icon}
      <h5 className="diffFont pt-4 pb-4 text-2xl">{props.title}</h5>
      <p className="text-base text-gray-600 duration-500">
        {props.description}
      </p>
    </div>
  );
}
