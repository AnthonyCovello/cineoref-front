import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  randomRef: {},
};
export const randomRefSlice = createSlice({
  name: 'randomRef',
  initialState,
  reducers: {
    setRandomRefData: (state, { payload }) => {
      state.randomRef = payload;
    },
  },
});

export default randomRefSlice.reducer;
export const { setRandomRefData } = randomRefSlice.actions;
