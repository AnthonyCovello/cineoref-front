// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './feature/loginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
