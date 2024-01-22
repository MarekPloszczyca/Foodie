import SmallHeader from "./SmallHeader";

export default function Newsletter() {
  return (
    <div className="py-12 text-white">
      <SmallHeader title="Newsletter" />
      <p className="italic pt-4">
        Subscribe to our newsletter to receive information about our news
      </p>
      <div className="relative max-w-[29.5rem]">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="p-4 mt-4 w-full max-w-[29.5rem] text-black"
        ></input>
        <button className="diffFont bg-orange rounded p-2 px-4 absolute right-2 top-6">
          Sign Up
        </button>
      </div>
    </div>
  );
}
