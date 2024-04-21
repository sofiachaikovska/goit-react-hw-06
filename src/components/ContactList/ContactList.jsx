import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactListContainer}>
      {Array.isArray(contacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
