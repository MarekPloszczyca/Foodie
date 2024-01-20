import { Fragment } from "react";
import HeaderContainer from "./Components/HeaderContainer";
import Navigation from "./Components/Navigation";
import FeaturesGrid from "./Components/FeaturesGrid";

function App() {
  return (
    <Fragment>
      <Navigation />
      <HeaderContainer title="Enjoy Our Delicious Meal" />
      <FeaturesGrid />
    </Fragment>
  );
}

export default App;
