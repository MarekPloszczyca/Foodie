import ReservationForm from "./ReservationForm";
import Video from "./Video";

export default function ReservationContainer() {
  return (
    <div className="pt-24 flex items-stretch">
      <Video />
      <ReservationForm />
    </div>
  );
}
