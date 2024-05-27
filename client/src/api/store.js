// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userReducer";
import userReducer1 from "./userReducer";

export const store = configureStore({
  reducer: {
    users: userReducer1,
  },
});
