import Menu from "./Menu";
import SmallHeader from "./SmallHeader";

export default function MenuContainer() {
  return (
    <div className="flex flex-col items-center pt-16">
      <SmallHeader title="Food Menu" center />
      <h3 className="diffFont text-2xl pt-2">Most Popular Meals</h3>
      <Menu />
    </div>
  );
}
