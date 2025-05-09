import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(login(values)).unwrap();
      actions.resetForm();
      navigate("/contacts");
    } catch (error) {
      alert(`Login failed error: ${error}`);
    }
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
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
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
