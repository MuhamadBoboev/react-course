import React from "react";
import { connect, withFormik } from "formik";
import { compose } from "redux";

const MyForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="fdgfdgd">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const MyEnhancedForm = compose(connect())(
  withFormik({
    mapPropsToValues: () => ({ name: "" }),

    // Custom sync validation
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      // setTimeout(() => {}, 0);
    },

    displayName: "BasicForm",
  })(MyForm)
);
