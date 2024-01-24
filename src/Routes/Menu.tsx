import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import PagesTitle from "../Components/PagesTitle";
import MenuContainer from "../Components/MenuContainer";
import Footer from "../Components/Footer";

export default function MenuPage() {
  return (
    <Fragment>
      <Navigation />
      <PagesTitle title="Our Menu" />
      <MenuContainer />
      <Footer />
    </Fragment>
  );
}
