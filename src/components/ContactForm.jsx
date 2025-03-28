import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';


export const ContactForm = () => {
  const dispatch = useDispatch();

const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required("Обов'язково"),
    number: Yup.string()
      .min(5, 'Мінімум 5 символів')
      .max(20, 'Максимум 20 символів')
    
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат: 123-45-67')
    .required("Обов'язково"),
});
  // Початкові значення
  const initialValues = {
    name: '',
    number: '',
  };
  // При сабміті
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),             
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact)); //  надсилаємо контакт у Redux
    actions.resetForm();              //  очищуємо форму
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className={css.form}>
          <label>
            Ім’я:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label>
            Номер:
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>

          <button type="submit" disabled={!(isValid && dirty)}>
            Додати контакт
          </button>
        </Form>
      )}
    </Formik>
  );
};
