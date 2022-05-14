import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  randomRef: {},
  newRef: {},
};

export const refSlice = createSlice({
  name: 'ref',
  initialState,
  reducers: {
    setRandomRefData: (state, { payload }) => {
      state.randomRef = payload;
    },
    setNewRefData: (state, { payload }) => {
      state.newRef = payload;
    },
  },
});

export default refSlice.reducer;
export const { setRandomRefData, setNewRefData } = refSlice.actions;
