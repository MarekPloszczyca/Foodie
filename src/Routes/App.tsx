import { Fragment } from "react";
import HeaderContainer from "../Components/HeaderContainer";
import Navigation from "../Components/Navigation";
import FeaturesGrid from "../Components/FeaturesGrid";
import About from "../Components/About";
import MenuContainer from "../Components/MenuContainer";
import ReservationContainer from "../Components/ReservationContainer";
import TeamMembers from "../Components/TeamMembers";

function App() {
  return (
    <Fragment>
      <Navigation />
      <HeaderContainer title="Enjoy Our Delicious Meal" />
      <FeaturesGrid />
      <About />
      <MenuContainer />
      <ReservationContainer />
      <TeamMembers/>
    </Fragment>
  );
}

export default App;
