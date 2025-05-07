import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        <li>{name}</li>
        <li>{phone}</li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
