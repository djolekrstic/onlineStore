import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import likedReducer from "./features/liked/likedSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    likedState: likedReducer,
    cartState: cartReducer,
  },
});
