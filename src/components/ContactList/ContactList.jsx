import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <Contact id={id} name={name} phone={phone} />
          </li>
        ))}
      </ul>

      {loading && !error && <h2>Loading.....</h2>}

      {error && <h2>{error}</h2>}
    </>
  );
};

export default ContactList;
