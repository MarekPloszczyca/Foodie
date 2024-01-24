import SmallHeader from "./SmallHeader";
import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

interface Props {
  title: string;
  image: string;
  text: string;
}

export default function MealsDescription(props: Props) {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <div
      className={`centered flex-col pt-4 md:px-2 md:[&>h6]:text-2xl ${
        display ? `animate-fromBottom ` : ""
      }`}
      ref={item}
    >
      <SmallHeader title={props.title} center />
      <div
        className={`flex-1 bg-cover bg-center bg-no-repeat relative
      overflow-hidden z-10    before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-r
      before:bg-gray-600   
      before:opacity-75
      before:z-[-5] text-white my-4`}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p className="diffFont py-8">{props.text}</p>
      </div>
    </div>
  );
}
