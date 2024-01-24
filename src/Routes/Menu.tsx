import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import PagesTitle from "../Components/PagesTitle";
import MenuContainer from "../Components/MenuContainer";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function MenuPage() {
  return (
    <Fragment>
      <Navigation />
      <PagesTitle title="Our Menu" />
      <MenuContainer />
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}
