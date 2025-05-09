import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { toast } from "react-toastify";
import { selectContacts } from "../../redux/contacts/selectors";

const formValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name is too short")
    .max(50, "The name is too long")
    .required("Field is required"),
  number: Yup.string()
    .min(7, "The number is too short")
    .max(10, "The number is too long")
    .required("Field is required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts!`);
      return;
    }

    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact))
      .unwrap()
      .then(() => toast.success("Contact added successfully"))
      .catch(() => toast.error("An error occurred while adding"));
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
            <Field type="phone" name="number" id={numberId} />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </div>

          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
