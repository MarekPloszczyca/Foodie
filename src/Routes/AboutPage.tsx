import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import PagesTitle from "../Components/PagesTitle";
import About from "../Components/About";
import FeaturesGrid from "../Components/FeaturesGrid";
import Footer from "../Components/Footer";
import AboutMeals from "../Components/AboutMeals";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function AboutPage() {
  return (
    <Fragment>
      <Navigation />
      <PagesTitle title="About Us" />
      <About />
      <FeaturesGrid />
      <AboutMeals />
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}
