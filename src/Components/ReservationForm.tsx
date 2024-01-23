import ReservationInput from "./ReservationInput";
import SmallHeader from "./SmallHeader";
import { useFormik } from "formik";
import { useState } from "react";

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
  const [booked, setBooked] = useState(false);

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      people: "",
    },
    enableReinitialize: true,
    validate,
    onSubmit: () => {
      if (!localStorage.getItem(`${form.values.name}`)) {
        localStorage.setItem(
          `${form.values.name}`,
          JSON.stringify(form.values)
        );
        form.resetForm();
      } else setBooked(true);
    },
  });

  return (
    <div className="bg-darkBlue p-12 relative ">
      <div className={`${booked && "invisible"}`}>
        <SmallHeader title="Reservation" />

        <h3 className="diffFont text-white text-2xl pt-2">
          Book A Table Online
        </h3>
      </div>
      <form className={`${booked && "invisible"}`} onSubmit={form.handleSubmit}>
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
          className="diffFont text-white bg-orange w-full mt-4 py-4 lg:hover:brightness-110 "
        >
          BOOK NOW
        </button>
      </form>{" "}
      {booked && (
        <div className="diffFont flex flex-col items-center  text-white bg-darkBlue absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-orange border-2 rounded lg:h-80 lg:justify-center">
          <SmallHeader title="Information" center />
          <p className="py-4 text-xl text-center">
            One of our tables is already booked by you. If you need any
            informations contact us.
          </p>
          <button
            className="bg-orange px-8 mt-4 w-1/2 lg:hover:brightness-110 lg:hover:duration-500  lg:text-3xl "
            onClick={() => {
              setBooked(false);
            }}
          >
            &#10003;
          </button>
        </div>
      )}
    </div>
  );
}
