// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './features/dropDownLoginSlice';
import topNewReducer from './features/topNewSlice';
import authReducer from './features/authSlice';
import messageReducer from './features/messageSlice';

const reducer = {
  dropdown: dropdownReducer,
  topNew: topNewReducer,
  auth: authReducer,
  message: messageReducer,
};

// ? Store
export default configureStore({
  reducer,
});
