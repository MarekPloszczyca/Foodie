import Logo from "../../assets/Logo.png";

export default function Navigation() {
  return (
    <nav className="bg-darkBlue flex justify-between">
      <div className="flex justify-center items-center ">
        <img src={Logo} className="w-16  p-4" />
        <p className="diffFont text-3xl text-orange">Foodie</p>
      </div>
      <button className="m-4 p-2 border border-gray-800 rounded">
        <div className="menuBar"></div>
        <div className="menuBar"></div>
        <div className="menuBar mb-0"></div>
      </button>
    </nav>
  );
}
