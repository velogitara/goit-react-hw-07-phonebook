import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const myValueSlice = createSlice({
  name: 'myValue',
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state, action) {
      state.value = state.value - action.payload;
    },
  },
});

const persistConfig = {
  key: 'root2',
  storage,
  // whitelist: ['value'],
};

export const myValueReducer = persistReducer(
  persistConfig,
  myValueSlice.reducer
);
export const { increment, decrement } = myValueSlice.actions;

// selectors

export const getClicksValue = state => state.myValue.value;
