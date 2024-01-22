
import SmallHeader from "./SmallHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Company() {
  return (
    <div>
      <SmallHeader title="Company" />
      <ul className="diffFont text-white pt-4 [&>li]:pt-2 [&>li]:flex [&>li]:items-center [&>li>p]:pl-2">
        <li>
          <FontAwesomeIcon icon={faChevronRight} />
          <p>About us</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} />
          <p> Services</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} />
          <p>Our Chefs</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} />
          <p>Reservation</p>
        </li>
      </ul>
    </div>
  );
}
