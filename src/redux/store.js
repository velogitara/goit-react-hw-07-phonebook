import { configureStore } from '@reduxjs/toolkit';
import { myValueReducer } from './myValueSlice';
import { myExample } from './myExample';
import { persistedReducer } from './itemsSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    myValue: myValueReducer,
    myExample: myExample.reducer,
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
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
