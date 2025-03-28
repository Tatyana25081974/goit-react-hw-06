import { createSlice } from '@reduxjs/toolkit';
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',                  //Початковий стан — обʼєкт з одним полем name/фільтр за імʼям.Коли користувач нічого не ввів — воно пусте
  },
  reducers: { //функція, яка змінює стан
    changeFilter: function (state, action) {
      state.name = action.payload;               // оновлює name на значення, яке приходить в action.payload (тобто — новий текст фільтра).
    },
  },
});
const changeFilter = filtersSlice.actions.changeFilter;
export { changeFilter };
export default filtersSlice.reducer;