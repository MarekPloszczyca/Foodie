interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function Feature(props: Props) {
  return (
    <div className="p-4 m-4 mb-8 md:mb-4  bg-white lg:hover:bg-orange duration-500  lg:[&_*]:hover:text-white">
      {props.icon}
      <h5 className="diffFont pt-4 pb-4 text-2xl">{props.title}</h5>
      <p className="text-base text-gray-600 duration-500">{props.description}</p>
    </div>
  );
}
