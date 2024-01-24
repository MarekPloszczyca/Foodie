import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

interface Props {
  img: string;
  name: string;
  type: string;
  delay?: number;
}

export default function SingleMember(props: Props) {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <div
      ref={item}
      className={` text-center bg-white p-6 flex flex-col items-center mt-12 md:mt-0 lg:[&>img]:hover:scale-110 [&>img]:duration-500 opacity-0 ${
        display ? "animate-fromBottom" : ""
      }`}
      style={{ animationDelay: `${props.delay}ms` }}
    >
      <img src={props.img} alt={props.name} className="rounded-full " />
      <h5 className="diffFont pt-6 text-2xl">{props.name}</h5>
      <p className="text-gray-600">{props.type}</p>
    </div>
  );
}
