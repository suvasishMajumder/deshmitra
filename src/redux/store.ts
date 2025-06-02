import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;