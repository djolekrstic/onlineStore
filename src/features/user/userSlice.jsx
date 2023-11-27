import { createSlice } from "@reduxjs/toolkit";

const themes = {
  light: "light",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.dark;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const getCurrencyFromLocalStorage = () => {
  const currency = localStorage.getItem("currency") || "RSD";
  return currency;
};

const getLanguageFromLocalStorage = () => {
  const language = localStorage.getItem("language") || "serbian";
  return language;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
  currency: getCurrencyFromLocalStorage(),
  language: getLanguageFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { dark, light } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
    changeCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem("currency", state.currency);
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", state.language);
    },
  },
});

export const { toggleTheme, changeCurrency, changeLanguage } =
  userSlice.actions;

export default userSlice.reducer;
