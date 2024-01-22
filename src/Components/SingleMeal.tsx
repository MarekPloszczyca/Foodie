
interface Props {
  img: string;
  name: string;
  price: string;
  text: string;
  type?: string;
}

export default function SingleMeal(props: Props) {
  return (
    <div className="flex p-4 w-full items-center">
      <img src={props.img} className="w-24 " />
      <div className="pl-4 w-full">
        <p className="diffFont w-full text-xl flex justify-between border-b-2">
          {props.name} <span className="text-orange">{`$${props.price}`}</span>
        </p>
        <p className="text-gray-600 italic text-sm pt-2">{props.text}</p>
      </div>
    </div>
  );
}
