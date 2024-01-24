

interface Props{
    image:string;
    text:string;
}

export default function MealsDescription(props:Props) {
  return (
    <div className=" pt-4 ">
      <div
        className={` bg-cover bg-center bg-no-repeat relative
      overflow-hidden z-10    before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-r
      before:bg-gray-600   
      before:opacity-75
      before:z-[-5] text-white mb-4`}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p className="diffFont py-8">
         {props.text}
        </p>
      </div>
    </div>
  );
}
