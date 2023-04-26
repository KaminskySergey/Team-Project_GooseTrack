import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

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

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['isTheme'],
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);
