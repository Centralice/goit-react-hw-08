import s from "./RegisterPage.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";

const RegisterPage = () => {
  function reg(values, actions) {
    console.log(values);
    actions.resetForm();
  }
  const id = useId();
  const regSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={reg}
        validationSchema={regSchema}
      >
        <Form>
          <label htmlFor={`${id}-username`}>Username</label>
          <Field type="text" name="username" id={`${id}-username`}></Field>
          <ErrorMessage name="username"></ErrorMessage>

          <label htmlFor={`${id}-email`}>Email</label>
          <Field type="email" name="email" id={`${id}-email`}></Field>
          <ErrorMessage name="email"></ErrorMessage>

          <label htmlFor={`${id}-password`}>Password</label>
          <Field type="password" name="password" id={`${id}-password`}></Field>
          <ErrorMessage name="password"></ErrorMessage>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
