// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice.js';
import filtersReducer from './filtersSlice.js';

//  Імпортуємо Redux Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // Використовує localStorage

//  Налаштування Persist тільки для контактів
const contactsPersistConfig = {
  key: 'contacts',       // Назва ключа в localStorage
  storage,               // Тип сховища — localStorage
  whitelist: ['items'],  // Зберігаємо тільки масив контактів
};

//  Обгортаємо contactsReducer для збереження
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

// Створюємо Redux Store
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Цей редʼюсер буде зберігатись
    filters: filtersReducer,            // цей — ні (тимчасовий стан)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створюємо persistor — він керує збереженням і відновленням
export const persistor = persistStore(store);
