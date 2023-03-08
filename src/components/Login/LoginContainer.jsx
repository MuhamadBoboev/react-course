import { Formik } from "formik";
import * as yup from "yup";
import React from "react";

const Login = () => {
  const validationsSchema = yup
    .object()
    .shape({ name: yup.number().typeError("adsasd").required("IIIII") });
  return (
    <div>
      <h1>fsafasfsasaf</h1>
      <Formik
        initialValues={{
          name: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          isValid,
          dirty,
        }) => {
          <form className="form">
            <p>
              <label htmlFor="name">Name</label>
              <br></br>
              <input
                className="input"
                type={`text`}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="sad"
              ></input>
            </p>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <button type="submit" disabled={!isValid && !dirty}>
              Send
            </button>
          </form>;
        }}
      </Formik>
    </div>
  );
};

export default Login;
