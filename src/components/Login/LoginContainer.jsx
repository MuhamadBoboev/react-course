import React from "react";
import { connect, Formik, withFormik } from "formik";
import * as yup from "yup";

const loginFormik = () => {
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    password: yup
      .string()
      .typeError("Должно быть цыфрой")
      .required("Обязательно"),
    // rememberMe: yup.typeError("sad").required("Обязательно"),
  });
  return (
    <div>
      <h1>fsafasfsasaf</h1>
      <Formik
        initialValues={{
          name: "",
          password: "",
          rememberMe: "",
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
          handleSubmit,
        }) => {
          return (
            <div className="form">
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
                  placeholder="Login"
                ></input>
              </p>
              {touched.name && errors.name && <p>{errors.name}</p>}
              <br></br>
              <br></br>

              <p>
                <label htmlFor="password">Password</label>
                <br></br>
                <input
                  className="input"
                  type="text"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                ></input>
                {touched.password && errors.password && (
                  <p>{errors.password}</p>
                )}
              </p>
              <br></br>
              <br></br>

              <p>
                <input
                  type={"checkbox"}
                  name="rememberMe"
                  value={values.rememberMe}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <label>remember me</label>
              </p>
              <br></br>
              <br></br>

              <button
                type={"submit"}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
// handleSubmit(values, { props, setSubmitting }) {
//   props.dispatch(loginFormik(values));
//   setSubmitting(false);
// }
const MyFormLogin = withFormik({
  mapPropsToValues: () => ({ name: "Login" }),
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Login",
})(loginFormik);

// const Login = (props) => {
//   return (
//     <div>
//       <h1>Login</h1>
//       {/* <LoginReduxFormik /> */}
//     </div>
//   );
// };
// export default connect()(MyFormLogin);
