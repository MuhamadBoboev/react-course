import { connect } from "formik";
import { useForm } from "react-hook-form";

export const Logins = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => console.log(data);
  console.log(watch("FirstName"));
  return (
    <div className="form__login">
      <h1>Form</h1>
      {/* <from onSubmit={handleSubmit(onSubmit)}>
        Name<br></br>
        <input
          {...register("FirstNames", {
            required: "Обязательно введите значения",
            minLength: { value: 5, message: "Bllllaaa" },
          })}
        ></input>
        <br></br>
        <div style={{ height: 50 }}>
          {errors.FirstName && <p> {errors.FirstName.message || "Errors"}</p>}
        </div>
        <br></br>
        <input type="submit"></input>
      </from> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};
// export const Login = connect()(App);
