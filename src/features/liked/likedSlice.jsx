import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  likedItems: [],
  numItemsInLiked: 0,
};

const getLikedFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("likedProducts")) || defaultState;
};

const likedSlice = createSlice({
  name: "liked",
  initialState: getLikedFromLocalStorage(),
  reducers: {
    addLiked: (state, action) => {
      let doubleItem = false;
      state.likedItems.forEach((item) => {
        if (item.id == action.payload.id) {
          doubleItem = true;
          return;
        }
      });
      if (doubleItem) {
        state.likedItems = state.likedItems.filter(
          (item) => item.id != action.payload.id
        );
        toast.error("Product disliked.");
      } else {
        state.likedItems.push(action.payload);
        toast.success("Product liked.");
      }

      state.numItemsInLiked = state.likedItems.length;
      localStorage.setItem("likedProducts", JSON.stringify(state));
    },
    removeAll: (state) => {
      localStorage.setItem("likedProducts", JSON.stringify(defaultState));
      return defaultState;
    },
  },
});

export const { addLiked, removeAll } = likedSlice.actions;

export default likedSlice.reducer;
