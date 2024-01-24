import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import PagesTitle from "../Components/PagesTitle";
import ReservationContainer from "../Components/ReservationContainer";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function ReservationPage() {
  return (
    <Fragment>
      <Navigation />
      <PagesTitle title="Reservation" />
      <ReservationContainer />
      <div className="pt-24">
        <Footer />
      </div>
      <ScrollToTop />
    </Fragment>
  );
}
