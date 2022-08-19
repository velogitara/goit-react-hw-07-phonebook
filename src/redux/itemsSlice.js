import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, action) {
      return [...state.items, action.payload];
    },
    // removeContact(state, action) {
    //   return state.items.filter(item => item.name !== action.payload);
    // },
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, addFilter } = itemsSlice.actions;
