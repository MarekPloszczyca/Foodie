import SmallHeader from "./SmallHeader";

export default function Opening() {
  return (
    <div className="diffFont pt-12 text-white">
      <SmallHeader title="Opening" />
      <div className="pt-4">
        <p className="text-xl">Monday - Friday</p>
        <p className="text-gray-400 text-sm">11:00 AM - 20:00 PM</p>
      </div>
      <div className="pt-4">
        <p className="text-xl">Saturday - Sunday</p>
        <p className="text-gray-400 text-sm">11:00 AM - 22:00 PM</p>
      </div>
    </div>
  );
}
