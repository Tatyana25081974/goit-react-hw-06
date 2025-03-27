import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';  // 🟡 Імпортуємо екшен для оновлення фільтра
import css from './SearchBox.module.css'; // 🟢 Імпортуємо стилі (якщо є)

// 🔷 Компонент пошуку
export const SearchBox = () => {
  const dispatch = useDispatch(); 
  // 🟡 Отримуємо dispatch — це функція, яка відправляє екшени до Redux Store

  const filter = useSelector(state => state.filters.name); 
  // 🟢 Через useSelector читаємо з Redux поточне значення фільтра (filters.name)

  const handleChange = (e) => {
    // 🟣 Ця функція викликається щоразу, як користувач щось вводить у поле
    dispatch(changeFilter(e.target.value));
    // 🟡 Відправляємо екшен зі значенням поля — Redux зберігає його у filters.name
  };

  return (
    <div className={css.searchBox}>
      <label>
        Пошук контактів за іменем:
        <input
          type="text"
          value={filter}            //  Показуємо значення з Redux у полі
          onChange={handleChange}   //  При зміні — оновлюємо Redux
          placeholder="Введіть ім’я"
          className={css.input}     
        />
      </label>
    </div>
  );
};
