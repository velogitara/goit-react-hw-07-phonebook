// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const itemsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [] },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     // removeContact(state, action) {
//     //   return state.items.filter(item => item.name !== action.payload);
//     // },
//     // addFilter(state, action) {
//     //   state.filter = action.payload;
//     // },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   itemsSlice.reducer
// );

// export const { addContact, addFilter } = itemsSlice.actions;
