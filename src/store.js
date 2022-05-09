// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import dropDownloginReducer from './feature/dropDownLoginSlice';
import authReducer from './feature/auth/authSlice';

export default configureStore({
  reducer: {
    dropDownlogin: dropDownloginReducer,
    auth: authReducer,
  },
});
