import { Fragment } from "react";
import HeaderContainer from "../Components/HeaderContainer";
import Navigation from "../Components/Navigation";
import FeaturesGrid from "../Components/FeaturesGrid";
import About from "../Components/About";

function App() {
  return (
    <Fragment>
      <Navigation />
      <HeaderContainer title="Enjoy Our Delicious Meal" />
      <FeaturesGrid />
      <About/>
    </Fragment>
  );
}

export default App;
