import { useId } from "react";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  function handleSubmit(value, actions) {
    dispatch(register(value));
    actions.resetForm();
  }
  const id = useId();
  const regSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={regSchema}
    >
      <Form>
        <label htmlFor={`${id}-name`}>Username</label>
        <Field type="text" name="name" id={`${id}-name`}></Field>
        <ErrorMessage name="name"></ErrorMessage>

        <label htmlFor={`${id}-email`}>Email</label>
        <Field type="email" name="email" id={`${id}-email`}></Field>
        <ErrorMessage name="email"></ErrorMessage>

        <label htmlFor={`${id}-password`}>Password</label>
        <Field type="password" name="password" id={`${id}-password`}></Field>
        <ErrorMessage name="password"></ErrorMessage>
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
