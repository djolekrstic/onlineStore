import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import likedReducer from "./features/liked/likedSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    likedState: likedReducer,
  },
});
