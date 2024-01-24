interface Props {
  ulStyle: string;
  firstItem?: string;
  desktop?: boolean;
}

export default function NaviOptions(props: Props) {
  return (
    <ul className={props.ulStyle}>
      <li className={props.firstItem}>HOME</li>
      <li>ABOUT</li>
      <li>MENU</li>
      <li>RESERVATION</li>
      <li>OUR TEAM</li>
      <li>CONTACT</li>
      {props.desktop && (
        <button className="bg-orange rounded p-2 ml-2 hover:brightness-110 duration-500">
          BOOK A TABLE
        </button>
      )}
    </ul>
  );
}
