import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import PagesTitle from "../Components/PagesTitle";
import TeamMembers from "../Components/TeamMembers";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function Team() {
  return (
    <Fragment>
      <Navigation />
      <PagesTitle title="Our Team" />
      <TeamMembers additional />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
