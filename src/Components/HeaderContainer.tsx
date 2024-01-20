import Image from "../../assets/HomeImage.png";

export default function HeaderContainer(props: { title: string }) {
  return (
    <div
      className=" flex flex-col items-center text-center p-8 pt-40 bg-[url(../../assets/Background.jpg)] bg-cover bg-center bg-no-repeat  relative
      overflow-hidden z-10    before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-r
      before:bg-darkBlue
      before:opacity-75
      before:z-[-5] text-white"
    >
      <h1 className="diffFont text-4xl pb-2">{props.title}</h1>
      <p className="">
        Embrace a culinary adventure at our restaurant, where every dish is a
        journey of flavors meticulously crafted to delight your palate. Join us
        in an ambiance of warmth and sophistication, where our attentive staff
        awaits to elevate your dining experience.
      </p>
      <button className="diffFont bg-orange font-thin p-2 mt-4 rounded">
        BOOK A TABLE
      </button>
      <img
        className="w-10/12 max-w-md animate-spin-slow relative top-12"
        src={Image}
      />
      <div className="h-24"></div>
    </div>
  );
}
