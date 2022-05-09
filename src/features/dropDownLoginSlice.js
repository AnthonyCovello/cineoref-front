import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropdown: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginDropDown: (state) => {
      state.dropdown = !state.dropdown;
    },
  },
});

export const { setLoginDropDown } = loginSlice.actions;
export default loginSlice.reducer;
