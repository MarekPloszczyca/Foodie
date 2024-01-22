import Image from "../../assets/HomeImage.png";

export default function HeaderContainer(props: { title: string }) {
  return (
    <div
      className="flex flex-col items-center text-center p-8 pt-40 bg-[url(../../assets/Background.jpg)] bg-cover bg-center bg-no-repeat  relative
      overflow-hidden z-10    before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-r
      before:bg-darkBlue
      before:opacity-75
      before:z-[-5] text-white lg:flex-row lg:justify-between lg:pt-30 lg:py-40 lg:text-start"
    >
      <div className="max-w-xl lg:pr-4 "><h1 className="diffFont text-4xl pb-2 lg:text-6xl">{props.title}</h1>
      <p className="lg:text-lg lg:text-justify">
        Embrace a culinary adventure at our restaurant, where every dish is a
        journey of flavors meticulously crafted to delight your palate. Join us
        in an ambiance of warmth and sophistication, where our attentive staff
        awaits to elevate your dining experience.
      </p>
      <button className="diffFont bg-orange p-2 mt-4 rounded lg:text-lg">
        BOOK A TABLE
      </button></div>
      <img
        className="w-10/12 max-w-md animate-spin-slow relative top-12 lg:top-0"
        src={Image}
      />
      <div className="h-24"></div>
    </div>
  );
}
