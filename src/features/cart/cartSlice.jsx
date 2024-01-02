import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 5,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product, price, amount } = action.payload;
      let priceNum = Number(price);
      let amountNum = Number(amount);
      const item = state.cartItems.find((i) => i.id === product.id);
      if (item) {
        item.amountNum += amountNum;
      } else {
        state.cartItems.push({ ...product, amountNum, priceNum });
      }

      state.numItemsInCart += amountNum;
      state.cartTotal += priceNum * (product.amountNum || amountNum);
      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
      if (amount > 1) {
        toast.success("Games added to cart.");
      } else {
        toast.success("Game added to cart.");
      }
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const product = state.cartItems.find((i) => i.id === id);
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
      state.numItemsInCart -= product.amountNum;
      state.cartTotal -= product.priceNum * product.amountNum;
      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
      toast.error("Item removed.");
    },
    editItem: (state, action) => {
      const { product, newAmount, userRequest } = action.payload;
      const { id, priceNum } = product;
      let newAmountNum = Number(newAmount);
      const item = state.cartItems.find((i) => i.id === id);
      if (userRequest === "add") {
        state.numItemsInCart += 1;
        state.cartTotal += priceNum;
      }
      if (userRequest === "remove") {
        state.numItemsInCart -= 1;
        state.cartTotal -= priceNum;
      }
      item.amountNum = newAmountNum;
      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
