import SmallHeader from "./SmallHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="diffFont pt-12 text-white [&>p]:flex [&>p]:items-center [&>p]:pt-4 [&>p>span]:pl-4 ">
      <SmallHeader title="Contact" />
      <p>
        <FontAwesomeIcon icon={faLocationDot} />
        <span>Grodzka 43A, Cracow, Poland</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        <span>+48 530-752-290</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>foodierestauran@gmail.com</span>
      </p>
    </div>
  );
}
