import SmallHeader from "./SmallHeader";

export default function AboutDescription() {
  return (
    <div className="p-4 pt-12">
      <SmallHeader title="About Us" />
      <h3 className="diffFont text-4xl pt-4">Welcome to Foodie</h3>
      <p className="pt-8 text-gray-600">
        Our restaurant boasts a warm and inviting ambiance that sets the perfect
        stage for an unforgettable dining experience. The contemporary decor,
        combined with subtle lighting, creates a cozy atmosphere that
        complements the culinary delights we have to offer.
      </p>
      <p className="pt-8 text-gray-600">
        At our restaurant, we take pride in sourcing only the finest, freshest
        ingredients to craft a menu that caters to diverse palates. From
        succulent meats and seafood to vibrant vegetarian options, our chefs
        skillfully prepare each dish to tantalize your taste buds.
      </p>
      <div className="flex items-center pt-2 mt-8 border-l-4 border-orange">
        <div className="diffFont text-orange text-4xl pl-4 pr-8">10</div>
        <div className="flex flex-col">
          Year of <span className="diffFont">EXPERIENCE</span>
        </div>
      </div>
      <div className="flex items-center pt-2 mt-8 border-l-4 border-orange">
        <div className="diffFont text-orange text-4xl pl-4 pr-8">23</div>
        <div className="flex flex-col">
          Popular <span className="diffFont">MASTER CHEFS</span>
        </div>
      </div>
      <button className="diffFont bg-orange text-white  p-4 pl-10 pr-10 mt-8">READ MORE</button>
    </div>
  );
}
