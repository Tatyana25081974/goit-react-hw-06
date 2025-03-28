

import { useSelector } from 'react-redux';
import { Contact } from './Contact'; 
import css from './ContactList.module.css'; 

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items); // всі контакти з Redux
  const filter = useSelector(state => state.filters.name);     // фільтр із Redux

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
