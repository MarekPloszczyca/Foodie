import SingleMember from "./SingleMember";
import SmallHeader from "./SmallHeader";
import MemberOne from "../../assets/MemberOne.jpg";
import MemberTwo from "../../assets/MemberTwo.jpg";
import MemberThree from "../../assets/MemberThree.jpg";
import MemberFour from "../../assets/MemberFour.jpg";
import { useRef, useState } from "react";
import useDisplay from "../Hooks/useDisplay";

export default function TeamMembers() {
  const item = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);

  useDisplay(item, setDisplay);
  return (
    <div className="p-4 pt-20 flex flex-col items-center ">
      <div
        ref={item}
        className={`${
          display ? "animate-fromBottom" : ""
        } centered flex-col opacity-0`}
        
      >
        <SmallHeader title="Team Members" center />
        <h3 className="diffFont text-2xl pt-2">Our Master Chefs</h3>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:pt-16 md:max-w-tablet md:pb-16 lg:grid-cols-4 lg:max-w-desktop">
        <SingleMember img={MemberOne} name="Allan Daníel" type="Chef" />
        <SingleMember img={MemberTwo} name="Sundar Iulius" type="Sous Chef" delay={window.innerWidth >= 768 ? 300 : 0}/>
        <SingleMember
          img={MemberThree}
          name="Thomas Devadas"
          type="Sushi Master"
          delay={window.innerWidth >= 768 ? 600 : 0}
        />
        <SingleMember img={MemberFour} name="Tshepo Sultan" type="Rotisseur"  delay={window.innerWidth >= 768 ? 900 : 0}/>
      </div>
    </div>
  );
}
