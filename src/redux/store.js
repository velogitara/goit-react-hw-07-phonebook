import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
import { myValueSlice } from './myValueSlice';
import { myExample } from './myExample';

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    myExample: myExample.reducer,
    contacts: itemsSlice.reducer,
  },
});

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const addContact = createAction('items/addContact');
// export const removeContact = createAction('items/removeContact');

// const items = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [removeContact]: (state, action) => state - action.payload,
// });
