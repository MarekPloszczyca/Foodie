import { Link } from "react-router-dom";

interface Props {
  ulStyle: string;
  firstItem?: string;
  desktop?: boolean;
}

export default function NaviOptions(props: Props) {
  return (
    <ul className={props.ulStyle}>
      <Link to="/">
        <li className={props.firstItem}>HOME</li>
      </Link>
      <Link to="/about">
        <li>ABOUT</li>
      </Link>
      <Link to="/menu">
        <li>MENU</li>
      </Link>
      <Link to="/reservation">
        <li>RESERVATION</li>
      </Link>
      <Link to="/team">
        <li>OUR TEAM</li>
      </Link>
      {props.desktop && (
        <Link to="/reservation"><button className="bg-orange rounded p-2 ml-2 hover:brightness-110 duration-500">
          BOOK A TABLE
        </button></Link>
      )}
    </ul>
  );
}
