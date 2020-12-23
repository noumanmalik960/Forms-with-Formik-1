import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";

const FormWithFormikContextFull = () => {
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
      <Form>
        <div>
          {/* <label htmlFor="name">Name: </label> */}
          <Field
            as={TextField}
            label="Name"
            variant="filled"
            name="name"
            type="text"
          />
          {/* <TextField
            id="filled-basic"
            label="name"
            variant="filled"
            name="name"
          /> */}
          <ErrorMessage
            name="name"
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
          />
        </div>
        <div>
          {/* <label htmlFor="age">Age: </label> */}
          <Field
            label="Age"
            as={TextField}
            variant="filled"
            name="age"
            type="text"
          />
          <ErrorMessage
            name="age"
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormWithFormikContextFull;
