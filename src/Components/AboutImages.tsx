import AboutOne from "../../assets/AboutOne.jpg";
import AboutTwo from "../../assets/AboutTwo.jpg";
import AboutThree from "../../assets/AboutThree.jpg";
import AboutFour from "../../assets/AboutFour.jpg";

export default function AboutImages() {
  return (
    <div className="centered">
      <div className="grid grid-cols-2 gap-4 p-4 pt-20 max-w-tablet lg:p-2">
        <img src={AboutOne} />
        <img src={AboutTwo} className="w-2/3 self-end" />
        <img src={AboutThree} className="w-2/3 self-start justify-self-end" />
        <img src={AboutFour} />
      </div>
    </div>
  );
}
