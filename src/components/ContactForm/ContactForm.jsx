import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я закоротке")
    .max(50, "Ім'я задовге")
    .required("Поле обов'язкове до заповнення"),
  phone: Yup.string()
    .min(7, "Номер закороткий")
    .max(10, "Номер задовгий")
    .required("Поле обов'язкове до заповнення"),
});

const initialValues = {
  name: "",
  phone: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formValidation}
      >
        <Form className={css.form}>
          <div className={css.labelWrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </div>

          <div className={css.labelWrapper}>
            <label htmlFor={numberId}>Number</label>
            <Field type="phone" name="phone" id={numberId} />
            <ErrorMessage
              className={css.errorMessage}
              name="phone"
              component="span"
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
