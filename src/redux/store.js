import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { pokemonApi } from './pokemon';
import { itemsSlice } from './contacts';
import { contactsApi } from './contacts';

// import {
// persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, itemsSlice.reducer);

// ================ STORE===============

export const store = configureStore({
  reducer: {
    contacts: itemsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({}),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],
});

// setupListeners(store.dispatch);

// export const persistor = persistStore(store);
