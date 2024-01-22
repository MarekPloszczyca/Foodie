import Company from "./Company";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Opening from "./Opening";

export default function Footer() {
  return (
    <footer className="bg-darkBlue p-4 pt-12 md:grid md:grid-cols-2 md:p-8 md:items-baseline">
      <Company />
      <Contact />
      <Opening/>
      <Newsletter/>
    </footer>
  );
}
