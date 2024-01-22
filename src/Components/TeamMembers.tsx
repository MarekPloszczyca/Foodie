import SingleMember from "./SingleMember";
import SmallHeader from "./SmallHeader";
import MemberOne from "../../assets/MemberOne.jpg";
import MemberTwo from "../../assets/MemberTwo.jpg";
import MemberThree from "../../assets/MemberThree.jpg";
import MemberFour from "../../assets/MemberFour.jpg";

export default function TeamMembers() {
  return (
    <div className="p-4 pt-20 flex flex-col items-center ">
      <SmallHeader title="Team Members" center />
      <h3 className="diffFont text-2xl pt-2">Our Master Chefs</h3>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:pt-16 md:max-w-tablet md:pb-16">
        <SingleMember img={MemberOne} name="Allan Daníel" type="Chef" />
        <SingleMember img={MemberTwo} name="Sundar Iulius" type="Sous Chef" />
        <SingleMember
          img={MemberThree}
          name="Thomas Devadas"
          type="Sushi Master"
        />
        <SingleMember img={MemberFour} name="Tshepo Sultan" type="Rotisseur" />
      </div>
    </div>
  );
}
