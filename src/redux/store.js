import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './lng';
import {authSlice} from './auth/auth';

export default configureStore({
  reducer: {
    lng:languageReducer,
    auth:authSlice.reducer,
  }
})