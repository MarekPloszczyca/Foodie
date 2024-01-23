import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  firstWord: string;
  secondWord: string;
  type: string;
  mealsHandler: React.Dispatch<{ type: string }>;
  active: boolean;
}

export default function MenuIcon(props: Props) {
  return (
    <button
      onClick={() => {
        props.mealsHandler({ type: props.type });
      }}
      className={`flex mt-4 items-center p-2 border-b-2  ${
        props.active ? "border-orange" : "border-gray-100"
      } lg:[&>p]:hover:scale-110 lg:[&_*]:duration-500 duration-500 hover:brightness-90`}
    >
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
