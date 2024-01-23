interface Props {
  img: string;
  name: string;
  type: string;
}

export default function SingleMember(props: Props) {
  return (
    <div className="bg-white p-6 flex flex-col items-center mt-12 md:mt-0 lg:[&>img]:hover:scale-110 [&>img]:duration-500">
      <img src={props.img} alt={props.name} className="rounded-full " />
      <h5 className="diffFont pt-6 text-2xl">{props.name}</h5>
      <p className="text-gray-600">{props.type}</p>
    </div>
  );
}
