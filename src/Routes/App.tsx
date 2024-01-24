import { Fragment } from "react";
import HeaderContainer from "../Components/HeaderContainer";
import Navigation from "../Components/Navigation";
import FeaturesGrid from "../Components/FeaturesGrid";
import About from "../Components/About";
import MenuContainer from "../Components/MenuContainer";
import ReservationContainer from "../Components/ReservationContainer";
import TeamMembers from "../Components/TeamMembers";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";

function App() {
  return (
    <Fragment>
      <Navigation />
      <HeaderContainer />
      <FeaturesGrid />
      <About more/>
      <MenuContainer />
      <ReservationContainer />
      <TeamMembers />
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}

export default App;
