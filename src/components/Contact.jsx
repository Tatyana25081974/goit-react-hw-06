

import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import css from './Contact.module.css'; 
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.card}>
      <p>
        <strong>{contact.name}</strong>: {contact.number}
      </p>
      <button onClick={handleDelete}>Видалити</button>
    </div>
  );
};
