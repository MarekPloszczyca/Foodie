import ReservationInput from "./ReservationInput";
import SmallHeader from "./SmallHeader";
import { useFormik } from "formik";

const validate = (values: {
  name: string;
  email: string;
  date: string;
  people: string;
}) => {
  const errors: {
    name?: string;
    email?: string;
    date?: string;
    people?: string;
  } = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.date) {
    errors.date = "Required";
  }
  if (!values.people) {
    errors.people = "Required";
  }
  return errors;
};

export default function ReservationForm() {
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      people: "",
    },
    validate,
    onSubmit: () => {
      console.log("submited");
    },
  });

  return (
    <div className="bg-darkBlue p-12">
      <SmallHeader title="Reservation" />
      <h3 className="diffFont text-white text-2xl pt-2">Book A Table Online</h3>
      <form onSubmit={form.handleSubmit}>
        <ReservationInput
          key="name"
          id="name"
          type="name"
          placeholder="Your Name"
          handleChange={form.handleChange}
          value={form.values.name}
          error={form.errors.name}
          onBlur={form.handleBlur}
          touched={form.touched.name}
        />
        <ReservationInput
          key="email"
          id="email"
          type="email"
          placeholder="Your Email"
          handleChange={form.handleChange}
          value={form.values.email}
          error={form.errors.email}
          onBlur={form.handleBlur}
          touched={form.touched.email}
        />
        <ReservationInput
          key="date"
          id="date"
          type="date"
          placeholder="Date"
          handleChange={form.handleChange}
          value={form.values.date}
          error={form.errors.date}
          onBlur={form.handleBlur}
          touched={form.touched.date}
        />
        <ReservationInput
          key="people"
          id="people"
          type="number"
          placeholder="No Of People"
          handleChange={form.handleChange}
          value={form.values.people}
          error={form.errors.people}
          onBlur={form.handleBlur}
          touched={form.touched.people}
        />
        <button
          type="submit"
          className="diffFont text-white bg-orange w-full mt-4 py-4"
        >
          BOOK NOW
        </button>
      </form>
    </div>
  );
}
