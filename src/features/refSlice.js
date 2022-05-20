import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  randomRef: {},
  newRef: [],
  topRef: [],
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
    setBestRefData: (state, { payload }) => {
      state.topRef = payload;
    },
  },
});

export default refSlice.reducer;
export const { setRandomRefData, setNewRefData, setBestRefData } = refSlice.actions;
