import { createSlice } from '@reduxjs/toolkit';

import { initTheme } from 'redux/theme/initTheme';


const themeSlice = createSlice({
  name: 'theme',
  initialState: initTheme,
  reducers: {
    toggleThemeAction(state) {
      state.isTheme = !state.isTheme;
    },
  },
});



export const { toggleThemeAction } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

