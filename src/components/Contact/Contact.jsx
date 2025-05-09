import { toast } from "react-toastify";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact successfully deleted"))
      .catch(() => toast.error("Unable to delete contact"));
  };

  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
