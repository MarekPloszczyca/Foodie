import SmallHeader from "./SmallHeader";
import { useState } from "react";

export default function Newsletter() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [wrong, setWrong] = useState(false);

  const submitHandler = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
      setWrong(true);
      return setTimeout(() => {
        setWrong(false);
      }, 1000);
    } else setSubmitted(true);
  };

  return (
    <div className="py-12 text-white">
      <SmallHeader title="Newsletter" />
      <p className="italic pt-4">
        Subscribe to our newsletter to receive information about our news
      </p>
      {!submitted && (
        <div className="relative max-w-[29.5rem]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            className={`${
              wrong && "animate-wrong bg-red-100"
            } relative p-4 mt-4 w-full max-w-[29.5rem] text-black`}
          ></input>
          <button
            onClick={() => {
              submitHandler();
            }}
            className="diffFont bg-orange rounded p-2 px-4 absolute right-2 top-6"
          >
            Sign Up
          </button>
        </div>
      )}
      {submitted && (
        <div className="diffFont text-2xl">Thanks for your support!</div>
      )}
    </div>
  );
}
