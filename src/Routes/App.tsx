import { Fragment } from "react";
import HeaderContainer from "../Components/HeaderContainer";
import Navigation from "../Components/Navigation";
import FeaturesGrid from "../Components/FeaturesGrid";
import About from "../Components/About";
import MenuContainer from "../Components/MenuContainer";
import ReservationContainer from "../Components/ReservationContainer";
import TeamMembers from "../Components/TeamMembers";
import Footer from "../Components/Footer";

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
    </Fragment>
  );
}

export default App;
