import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const FormWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // manual validation (i-e without yup)
    // validate: (values) => {
    //   const error = {};
    //   if (!values.name) {
    //     error.name = "Name field can't be empty";
    //   } else if (values.name.length > 20) {
    //     error.name = "Name field should be < 20 characters";
    //   } else if (values.age < 18) {
    //     error.age = "Age should be more than 18";
    //   }

    //   return error;
    // },

    // validation with yup
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name field is required")
        .max(15, "Name field should not exceed 15 characters"),
      age: yup
        .number()
        .max(60, "Age should be less than 60")
        .min(10, "Age should be greater than 10"),
    }),
  });

  return (
    <div>
      <div>User Form</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.age ? (
            <div style={{ color: "red" }}>{formik.errors.age}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithFormik;
