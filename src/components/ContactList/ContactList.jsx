import { ClipLoader } from "react-spinners";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && !error ? (
        <ClipLoader color="#0040ff" size={50} />
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.listItem}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}

      {error && <p className={css.error}>⚠️ {error}</p>}
    </>
  );
};

export default ContactList;
