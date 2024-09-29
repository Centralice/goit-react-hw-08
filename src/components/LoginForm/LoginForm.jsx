import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  function login(values, actions) {
    console.log(values);
    actions.resetForm();
  }
  const id = useId();
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={login}
        validationSchema={loginSchema}
      >
        <Form>
          <label htmlFor={`${id}-username`}>Username</label>
          <Field type="text" name="username" id={`${id}-username`}></Field>
          <ErrorMessage name="username"></ErrorMessage>
          <label htmlFor={`${id}-password`}>Password</label>
          <Field type="password" name="password" id={`${id}-password`}></Field>
          <ErrorMessage name="password"></ErrorMessage>
          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
