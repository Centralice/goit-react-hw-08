import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  function handleLogin(values, actions) {
    dispatch(login(values));
    actions.resetForm();
  }
  const id = useId();
  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        <Form>
          <label htmlFor={`${id}-email`}>Email</label>
          <Field type="text" name="email" id={`${id}-email`}></Field>
          <ErrorMessage name="email"></ErrorMessage>
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
