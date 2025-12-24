import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/GetProfileSlice";
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
