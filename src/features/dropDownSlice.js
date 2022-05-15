import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropdownLogin: false,
  dropdownProfile: false,
};

export const loginSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setLoginDropdown: (state) => {
      state.dropdownLogin = !state.dropdownLogin;
    },
    setProfileDropdown: (state) => {
      state.dropdownProfile = !state.dropdownProfile;
    },
  },
});

export const { setLoginDropdown, setProfileDropdown } = loginSlice.actions;
export default loginSlice.reducer;
