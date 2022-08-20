import { createSlice } from '@reduxjs/toolkit';

export const myExample = createSlice({
  name: 'myExample',
  initialState: { value: 0 },
  reducers: {
    addSomething(state, action) {
      return (state.value += 1);
    },
  },
});

export const { addSomething } = myExample.actions;
