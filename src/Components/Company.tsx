import SmallHeader from "./SmallHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Company() {
  return (
    <div>
      <SmallHeader title="Company" />
      <ul className="diffFont text-white pt-4 [&_li]:pt-2 [&_li]:flex [&_li]:items-center [&_li_p]:pl-2">
        <Link to="/about">
          <li className="lg:[&>p]:hover:tracking-widest lg:[&>p]:duration-500">
            <FontAwesomeIcon icon={faChevronRight} />
            <p>About us</p>
          </li>
        </Link>
        <Link to="/menu">
          <li className="lg:[&>p]:hover:tracking-widest lg:[&>p]:duration-500">
            <FontAwesomeIcon icon={faChevronRight} />
            <p> Menu</p>
          </li>
        </Link>
        <Link to="/team">
          <li className="lg:[&>p]:hover:tracking-widest lg:[&>p]:duration-500">
            <FontAwesomeIcon icon={faChevronRight} />
            <p>Our Team</p>
          </li>
        </Link>
        <Link to="/reservation">
          <li className="lg:[&>p]:hover:tracking-widest lg:[&>p]:duration-500">
            <FontAwesomeIcon icon={faChevronRight} />
            <p>Reservation</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
