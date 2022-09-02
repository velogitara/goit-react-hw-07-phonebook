import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './contacts';
import { contactsApi } from './contacts';

// ================ STORE===============

export const store = configureStore({
  reducer: {
    contacts: itemsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({}),
    contactsApi.middleware,
  ],
});

// setupListeners(store.dispatch);

// export const persistor = persistStore(store);
