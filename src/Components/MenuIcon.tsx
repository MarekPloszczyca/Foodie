import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  firstWord: string;
  secondWord: string;
}

export default function MenuIcon(props: Props) {
  return (
    <button className="flex mt-4 items-center p-2">
      <FontAwesomeIcon
        icon={props.icon}
        className="w-10 h-10 pr-4"
        style={{ color: "#FEA116" }}
      />
      <p className="flex flex-col text-gray-600 items-start">
        <span>{props.firstWord}</span>{" "}
        <span className="diffFont text-lg text-black">{props.secondWord}</span>
      </p>
    </button>
  );
}
