import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(register(values));
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.labelWrapper}>
            <label className={css.label}>
              Name
              <Field type="text" name="name" />
            </label>
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label}>
              Email
              <Field type="email" name="email" />
            </label>
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label}>
              Password
              <Field type="password" name="password" />
            </label>
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
