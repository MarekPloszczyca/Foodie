/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: any;
  error: string | undefined;
  onBlur: any;
  touched: boolean | undefined;
}

export default function ReservationInput(props: Props) {
  return (
    <input
      id={props.id}
      name={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      onBlur={props.onBlur}
      value={props.value}
      className={`${
        props.touched && props.error ? "border-red-600 animate-wrong" : ""
      } w-full relative mt-4 p-4 outline-none border-2 rounded focus:border-blue-500 `}
    />
  );
}
