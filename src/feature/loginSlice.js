import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    dropdown: false,
  },
  reducers: {
    setLoginDropDown: (state) => {
      state.dropdown = !state.dropdown;
    },
  },
});

export const { setLoginDropDown } = loginSlice.actions;
export default loginSlice.reducer;
