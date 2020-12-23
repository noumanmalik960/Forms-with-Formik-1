import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

const FormWithFormikContext = () => {
  return (
    <Formik
      initialValues={{ name: "", age: 0 }}
      validationSchema={yup.object({
        name: yup
          .string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        age: yup
          .number()
          .required("Required")
          .max(60, "age should be less than 60")
          .min(14, "age should be more than 14"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {/* we have to give the `value` and `onchange` props every time so we can do {...formik.getFieldProps} instead */}
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name} </div>
            ) : null}
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              // these 2 vals above could be reduced to {...formik.getFieldProps('age')}
            />
            {formik.touched.age && formik.errors.age ? (
              <div style={{ color: "red" }}>{formik.errors.age}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default FormWithFormikContext;
