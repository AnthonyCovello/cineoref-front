import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topContributors: [],
};

export const topContributorsSlice = createSlice({
  name: 'topContributors',
  initialState,
  reducers: {
    setTopContributorsData: (state, { payload }) => {
      state.topContributors = payload;
    },
  },
});

export const { setTopContributorsData } = topContributorsSlice.actions;
export default topContributorsSlice.reducer;
