import AboutDescription from "./AboutDescription";
import AboutImages from "./AboutImages";

export default function About(props:{more?:boolean}) {
  return (
    <div className="centered"><div className="lg:max-w-desktop lg:flex  lg:py-24">
      <AboutImages />
      <AboutDescription more={props.more}/>
    </div></div>
  );
}
