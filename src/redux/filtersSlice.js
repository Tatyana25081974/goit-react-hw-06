import { createSlice } from '@reduxjs/toolkit';
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',                  //Початковий стан — обʼєкт з одним полем name/фільтр за імʼям.Коли користувач нічого не ввів — воно пусте
  },
  reducers: { //функція, яка змінює стан
    changeFilter: function (state, action) {
      state.name = action.payload;               //отримує action.payload (тобто, те, що передаємо) і записує це у state.name
    },
  },
});
const changeFilter = filtersSlice.actions.changeFilter;
export { changeFilter };
export default filtersSlice.reducer;