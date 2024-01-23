import ReservationForm from "./ReservationForm";
import Video from "./Video";
import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

export default function ReservationContainer() {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);

  return (
    <div
      ref={item}
      className={`pt-24 md:flex items-stretch opacity-0 ${
        display ? "animate-fromBottom" : ""
      }`}
     
    >
      <Video />
      <ReservationForm />
    </div>
  );
}
