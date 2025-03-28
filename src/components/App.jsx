import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { SearchBox } from './SearchBox';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
       
        <div className={css.leftSide}>
          <h1 className={css.title}>Phonebook</h1>
          <div className={css.card}>
            <ContactForm />
            <h2 className={css.subtitle}>Find contacts by name:</h2>
            <SearchBox />
          </div>
        </div>

        <div className={css.rightSide}>
         <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
